import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createLead } from "@/lib/leads";

export const runtime = "nodejs";

interface EstimatePayload {
  name: string;
  email: string;
  company: string;
  dataType: string;
  volume: string;
  complexity: string;
  timeline: string;
  tier: string;
  captchaToken?: string;
}

async function verifyCaptcha(token: string): Promise<boolean> {
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    throw new Error("RECAPTCHA_SECRET_KEY is not configured");
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      { method: "POST" },
    );
    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

function generateEmailHTML(data: EstimatePayload): string {
  const row = (label: string, value: string) => `
    <div style="margin-bottom: 18px; padding-bottom: 14px; border-bottom: 1px solid #e5e7eb;">
      <div style="font-weight: 600; color: #0b4f9e; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">${label}</div>
      <div style="color: #1f2937; font-size: 16px;">${value}</div>
    </div>`;

  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
    <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: #0b4f9e; color: white; padding: 28px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="margin: 0; font-size: 22px;">New Project Estimate Lead</h1>
        <p style="margin: 8px 0 0 0; opacity: 0.9;">from Muenot Website Estimator</p>
      </div>
      <div style="background: #f9fafb; padding: 28px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
        ${row("Name", data.name)}
        ${row("Business Email", `<a href="mailto:${data.email}" style="color:#0b4f9e;">${data.email}</a>`)}
        ${data.company ? row("Company", data.company) : ""}
        ${row("Data Type", data.dataType)}
        ${row("Volume", data.volume)}
        ${row("Complexity", data.complexity)}
        ${row("Timeline", data.timeline)}
        ${row("Estimated Tier", data.tier)}
      </div>
    </body>
    </html>`;
}

export async function POST(request: NextRequest) {
  try {
    const body: EstimatePayload = await request.json();
    const { name, email, dataType, volume, complexity, timeline, captchaToken } =
      body;

    if (!name || !email || !dataType || !volume || !complexity || !timeline) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Verify captcha only if reCAPTCHA is configured
    if (process.env.RECAPTCHA_SECRET_KEY) {
      if (!captchaToken) {
        return NextResponse.json(
          { error: "Captcha verification required" },
          { status: 400 },
        );
      }
      const captchaValid = await verifyCaptcha(captchaToken);
      if (!captchaValid) {
        return NextResponse.json(
          { error: "Captcha verification failed" },
          { status: 400 },
        );
      }
    }

    if (
      !process.env.RESEND_API_KEY ||
      !process.env.RESEND_FROM_EMAIL ||
      !process.env.CONTACT_EMAIL
    ) {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `Project Estimate Lead - ${name}${body.company ? ` (${body.company})` : ""}`,
      html: generateEmailHTML(body),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    // Persist the estimate lead for the admin portal without blocking on DB errors.
    try {
      await createLead({
        type: "estimate",
        name: body.name,
        email: body.email,
        company: body.company || null,
        message: null,
        payload: {
          dataType: body.dataType,
          volume: body.volume,
          complexity: body.complexity,
          timeline: body.timeline,
          tier: body.tier,
        },
      });
    } catch (dbError) {
      console.error("[v0] Failed to store estimate lead:", dbError);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Estimate form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
