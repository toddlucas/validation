import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    return NextResponse.json({ ok: true });
  }

  try {
    const { email, eventId, eventSourceUrl } = await request.json();

    const eventData = {
      data: [{
        event_name: 'Lead',
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: eventSourceUrl,
        action_source: 'website',
        user_data: {
          em: email ? [await sha256(email.toLowerCase().trim())] : undefined,
          client_ip_address: request.headers.get('x-forwarded-for') ?? undefined,
          client_user_agent: request.headers.get('user-agent') ?? undefined,
        },
      }],
      ...(process.env.META_TEST_EVENT_CODE && { test_event_code: process.env.META_TEST_EVENT_CODE }),
    };

    await fetch(
      `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(eventData) }
    );
  } catch {
    // Fire-and-forget — don't let CAPI errors affect the user
  }

  return NextResponse.json({ ok: true });
}

async function sha256(str: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}
