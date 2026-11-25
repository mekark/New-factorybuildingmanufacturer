import { NextResponse } from "next/server";

const UPSTREAM_ENDPOINT =
  process.env.ENQUIRY_API_URL || "https://api.mekark.com/api/enquiry-form";

const fail = (message: string, status: number) =>
  NextResponse.json({ success: false, message }, { status });

const hostnameOf = (value: string | null | undefined) => {
  if (!value) return undefined;
  try {
    return new URL(value).hostname;
  } catch {
    return undefined;
  }
};

const text = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return fail(
        "Invalid request. Please refresh the page and try again.",
        400,
      );
    }

    if (!text(body.name) || !text(body.phone)) {
      return fail("Please enter your name and phone number.", 400);
    }

    const origin = request.headers.get("origin");
    const referer = request.headers.get("referer");

    const payload = {
      ...body,
      sourceDomain:
        text(body.sourceDomain) ||
        hostnameOf(origin) ||
        hostnameOf(referer) ||
        undefined,
      sourceUrl:
        text(body.sourceUrl) ||
        text(body.pageUrl) ||
        referer ||
        origin ||
        undefined,
    };

    const response = await fetch(UPSTREAM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(origin ? { Origin: origin } : {}),
        ...(referer ? { Referer: referer } : {}),
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        "Enquiry upstream error:",
        response.status,
        await response.text().catch(() => ""),
      );

      if (response.status >= 500) {
        return fail(
          "Our server is having trouble right now. Please try again in a moment or call us directly.",
          502,
        );
      }

      return fail(
        "We couldn't accept your details. Please check the form and try again.",
        400,
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enquiry API route error:", error);

    return fail(
      "Something went wrong while submitting your enquiry. Please try again or call us directly.",
      500,
    );
  }
}
