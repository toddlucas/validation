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
