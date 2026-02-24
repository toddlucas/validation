# Analytics & UTM Setup — Next.js / Vercel

This covers everything you need to add to your Next.js site to properly track ad performance and feed signal back to Meta's algorithm.

---

## What You're Setting Up

| System | Purpose | Required? |
|---|---|---|
| **Meta Pixel** (browser) | Fires conversion events; powers Advantage+ optimization | Yes — ads won't optimize without it |
| **Meta CAPI** (server-side) | Sends the same events server-side; deduplicates with Pixel | Strongly recommended — improves Andromeda signal quality |
| **GA4** | UTM attribution, session data, conversion funnel visibility | Yes — so you can see which ad → which signup |
| **UTM parameters** | Tags on your ad destination URLs so GA4 knows which ad drove each visit | Yes — configured in Meta Ads Manager, not in code |

---

## Part 1: Meta Pixel (Browser-Side)

### Get Your Pixel ID
1. Go to [Meta Events Manager](https://business.facebook.com/events_manager)
2. Connect Data Sources → Web → Facebook Pixel → Create new
3. Copy your **Pixel ID** (a 15-16 digit number)

### Install in Next.js (App Router)

Add the Pixel script to your root layout using `next/script`:

```tsx
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script id="meta-pixel" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 'YOUR_PIXEL_ID');
        fbq('track', 'PageView');
      `}</Script>
    </html>
  )
}
```

Replace `YOUR_PIXEL_ID` with your actual Pixel ID.

> **Pages Router alternative:** Put the same `<Script>` tag in `pages/_app.tsx` instead.

### Fire the Lead Event on Form Submission

In your waitlist form component, call `fbq('track', 'Lead')` after a successful submission:

```tsx
// components/WaitlistForm.tsx (or wherever your form lives)
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  // ... your existing form submission logic (API call, etc.)

  // Fire after successful submission
  if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
    (window as any).fbq('track', 'Lead')
  }
}
```

### Verify It's Working

Install the **Meta Pixel Helper** Chrome extension (search it in the Chrome Web Store — it's free and official). Visit your landing page and submit a test form entry. The extension shows a green badge when the Pixel fires and lists which events triggered.

---

## Part 2: Meta Conversions API (Server-Side) — Vercel Integration

CAPI sends the same `Lead` event from your server to Meta, independent of the browser. This matters because browser-side pixels get blocked by ad blockers and iOS privacy restrictions. With both Pixel + CAPI firing, Meta deduplicates them and gets a stronger, more complete signal — which directly improves Andromeda's optimization for your campaign.

### Vercel's Native CAPI Integration (Recommended — No Code)

Vercel has a first-party Meta integration that handles CAPI automatically.

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard) → your project → **Integrations** tab
2. Search for **"Meta" or "Facebook Conversions"** in the Vercel Marketplace
3. Connect your Meta Business account and select your Pixel
4. Vercel will inject CAPI event forwarding automatically for your conversion events

This is the zero-code path. Check the Vercel Integrations Marketplace first — if it's available and works for your use case, use it instead of implementing CAPI manually.

### Manual CAPI via Next.js API Route (If Needed)

If the Vercel integration doesn't cover your case, you can implement a server-side API route:

```tsx
// app/api/track-lead/route.ts  (App Router)
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { email, eventSourceUrl } = await request.json()

  const pixelId = process.env.META_PIXEL_ID
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN

  const eventData = {
    data: [{
      event_name: 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      event_source_url: eventSourceUrl,
      action_source: 'website',
      user_data: {
        em: email ? [await sha256(email.toLowerCase().trim())] : undefined,
        client_ip_address: request.headers.get('x-forwarded-for') ?? undefined,
        client_user_agent: request.headers.get('user-agent') ?? undefined,
      },
    }],
    test_event_code: process.env.META_TEST_EVENT_CODE, // remove in production
  }

  await fetch(
    `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(eventData) }
  )

  return NextResponse.json({ ok: true })
}

async function sha256(str: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str))
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
}
```

Then call this from your form's `handleSubmit` alongside the browser `fbq('track', 'Lead')` call. Both fire — Meta deduplicates them automatically using a shared `event_id` (add a UUID to both if you want clean deduplication).

**Environment variables to add in Vercel:**
```
META_PIXEL_ID=your_pixel_id
META_CAPI_ACCESS_TOKEN=your_system_user_access_token
META_TEST_EVENT_CODE=TEST12345  # only during testing, remove after
```

Get the CAPI access token from Meta Events Manager → your Pixel → Settings → Conversions API → Generate Access Token.

---

## Part 3: Google Analytics 4

### Get Your GA4 Measurement ID
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new GA4 property for Sorcery
3. Go to Admin → Data Streams → Add stream → Web → enter your domain
4. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### Install in Next.js

Use Next.js's official `@next/third-parties` package — this is the recommended approach as of Next.js 14+:

```bash
npm install @next/third-parties
```

```tsx
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

That's it. GA4 automatically captures page views, session data, and UTM parameters from incoming URLs.

### Track the Form Submission as a GA4 Conversion

In your form's `handleSubmit`, fire a GA4 event alongside the Pixel event:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  // ... form submission logic

  // GA4 conversion event
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'generate_lead', {
      event_category: 'waitlist',
      event_label: 'phase1',
    })
  }

  // Meta Pixel event
  if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
    (window as any).fbq('track', 'Lead')
  }
}
```

Then in GA4 Admin → Events → mark `generate_lead` as a conversion. This lets you see conversion counts in GA4's reports.

---

## Part 4: UTM Parameters

UTMs are query string parameters you append to your ad destination URLs. GA4 reads them automatically — no code changes needed on the landing page. You set them in Meta Ads Manager when you enter the destination URL for each ad.

### The UTM Structure for This Campaign

```
https://trysorcery.com/?utm_source=facebook&utm_medium=paid_social&utm_campaign=phase1-grant-writers&utm_content=ad-a-pain-hook
```

| Parameter | Values to use |
|---|---|
| `utm_source` | `facebook` |
| `utm_medium` | `paid_social` |
| `utm_campaign` | `phase1-grant-writers` or `phase1-franchise-operators` |
| `utm_content` | `ad-a-pain-hook`, `ad-b-outcome-hook`, `ad-c-specificity-static`, `ad-d-specificity-reels` |

### Build the URLs

Use Google's Campaign URL Builder: **ga-dev-tools.google/campaign-url-builder**

Paste in your landing page URL, fill in the fields, and it outputs the full tagged URL. Paste that URL into the "Destination URL" field for each ad in Meta Ads Manager.

### Where to Enter UTMs in Meta Ads Manager

When creating each ad:
- Scroll to **Destination** → **Website URL**
- Paste the full UTM-tagged URL
- OR: use the **URL Parameters** field below the URL input (Meta's way) — enter just the query string portion: `utm_source=facebook&utm_medium=paid_social&utm_campaign=phase1-grant-writers&utm_content=ad-a-pain-hook`

Both approaches work. The URL Parameters field is cleaner because Meta automatically appends it without you having to rebuild the full URL.

### What You'll See in GA4

After ads are running:
- **Reports → Acquisition → Traffic Acquisition** — filter by `Session source / medium = facebook / paid_social`
- **Reports → Acquisition → User Acquisition** — same filter, shows new vs. returning
- **Explore → Free Form** — build a custom report: rows = `utm_campaign`, columns = `Sessions`, `Conversions`, `Conversion rate`

This shows you which ICP campaign is converting better, and within each campaign, which ad variant drove the signup.

---

## Part 5: Implementation Checklist

### One-time setup
- [ ] Create Meta Pixel in Events Manager — copy Pixel ID
- [ ] Add Pixel `<Script>` to `app/layout.tsx`
- [ ] Check Vercel Marketplace for Meta CAPI integration — use if available
- [ ] If manual CAPI: add API route, add env vars in Vercel dashboard
- [ ] Create GA4 property — copy Measurement ID (`G-XXXXXXXXXX`)
- [ ] Install `@next/third-parties` — add `<GoogleAnalytics>` to `app/layout.tsx`
- [ ] Add `fbq('track', 'Lead')` and `gtag('event', 'generate_lead')` to form submit handler
- [ ] Mark `generate_lead` as a conversion in GA4 Admin

### Per-ad setup (in Meta Ads Manager)
- [ ] Build UTM-tagged URL for each ad (use Campaign URL Builder)
- [ ] Paste URL or URL parameters into each ad's destination URL field
- [ ] Ad A Grant Writers: `utm_content=ad-a-pain-hook&utm_campaign=phase1-grant-writers`
- [ ] Ad B Grant Writers: `utm_content=ad-b-outcome-hook&utm_campaign=phase1-grant-writers`
- [ ] Ad C Grant Writers: `utm_content=ad-c-specificity-static&utm_campaign=phase1-grant-writers`
- [ ] Ad D Grant Writers: `utm_content=ad-d-specificity-reels&utm_campaign=phase1-grant-writers`
- [ ] Repeat for Franchise Operators with `utm_campaign=phase1-franchise-operators`

### Verify before launch
- [ ] Visit your live landing page → open Meta Pixel Helper Chrome extension → confirm `PageView` event fires
- [ ] Submit a test form entry → confirm `Lead` event fires in Pixel Helper AND in Meta Events Manager (under Test Events tab)
- [ ] Visit `https://trysorcery.com/?utm_source=facebook&utm_medium=paid_social&utm_campaign=phase1-grant-writers&utm_content=ad-a-pain-hook` in an incognito window → check GA4 Realtime report → confirm the session appears with the correct UTM source/medium
- [ ] If CAPI: check Meta Events Manager → Test Events → send a test event → confirm it's received
