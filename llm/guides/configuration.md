# Configuration

## Marketing events

**Before writing any code:** copy `.env.local.example` to `.env.local` and fill it in.

1. **Meta Pixel ID** → [Meta Events Manager](https://business.facebook.com/events_manager) → Connect Data Sources → Web → Create Pixel → copy the 15-16 digit ID → paste into `NEXT_PUBLIC_META_PIXEL_ID`

2. **GA4 Measurement ID** → [analytics.google.com](https://analytics.google.com) → create a property for Sorcery → Admin → Data Streams → Web stream → copy `G-XXXXXXXXXX` → paste into `NEXT_PUBLIC_GA4_MEASUREMENT_ID`

3. **CAPI Access Token** → Events Manager → your Pixel → Settings → Conversions API → Generate Access Token → paste into `META_CAPI_ACCESS_TOKEN`

4. **Add all three** (plus `META_TEST_EVENT_CODE` while testing) to your Vercel project's Environment Variables dashboard

5. **Vercel CAPI integration** — also check Vercel's Marketplace for a native Meta integration first. If it covers your needs, you can skip the manual CAPI route entirely.

6. **GA4 conversion** — after deploying, go to GA4 Admin → Events → mark `generate_lead` as a conversion

7. **UTM URLs** — no code needed; configure those directly in Meta Ads Manager using the URL Parameters field on each ad (see the `utm_content` values in the setup doc)

## .env

**User**

How is .env.local used relative to .env in vercel?

**System**

In Next.js and Vercel, `.env.local` and `.env` serve different purposes:

**`.env.local` (local development only)**
- Never committed to git (it's in `.gitignore` by default)
- Overrides all other `.env*` files when running locally
- Where you put secrets and real credentials during development
- Vercel never sees this file

**`.env` (shared baseline)**
- Can be committed to git
- Used as a baseline for all environments
- Appropriate for non-secret, public defaults

**For Vercel (production/preview)**
- Since Vercel can't read your local `.env.local`, you must manually add the same variables via the **Vercel project dashboard → Settings → Environment Variables**
- That's exactly what step 4 in the guide refers to: adding `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_GA4_MEASUREMENT_ID`, `META_CAPI_ACCESS_TOKEN`, and `META_TEST_EVENT_CODE` there

So the workflow for this project is:
1. Copy `.env.local.example` → `.env.local`, fill in your values locally
2. Mirror those same values into Vercel's dashboard for deployed environments

The `NEXT_PUBLIC_` prefix on some variables (like `NEXT_PUBLIC_META_PIXEL_ID`) means they're embedded into the client-side bundle — those are safe to expose. `META_CAPI_ACCESS_TOKEN` has no prefix, so it stays server-side only.

## Testing

**User**

Should I use different values in the local file?

**System**

Generally, yes — for **testing**, you'll want to use different values locally vs. production:

**`META_TEST_EVENT_CODE`**
- Use it locally (and on Vercel preview deployments) — this routes events to Meta's Test Events tab so you can verify they fire without polluting real data
- Remove it (or leave blank) in Vercel's **Production** environment once you go live

**`META_CAPI_ACCESS_TOKEN`**
- You can use the same token in both places — it's tied to your Pixel, not the environment
- Some teams create separate Pixels for staging vs. production to keep data clean, but it's not required

**`NEXT_PUBLIC_META_PIXEL_ID`**
- Same reasoning — one Pixel is fine to start, but a separate "dev" Pixel keeps your production analytics clean if you're doing heavy local testing

**`NEXT_PUBLIC_GA4_MEASUREMENT_ID`**
- Ideally use a **separate GA4 data stream** (or property) locally so test traffic doesn't inflate your real metrics
- Your `.env.local` already has `G-XXXXXXXXXX` filled in — if that's your production stream, you may want a dedicated dev stream ID there instead

**Practical starting point:** For early validation/pre-launch, using the same values everywhere is fine. The `META_TEST_EVENT_CODE` is the one that matters most — make sure it's set locally and in Vercel Preview, and absent in Vercel Production.
