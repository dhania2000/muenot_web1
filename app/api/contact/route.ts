import { NextRequest, NextResponse } from "next/server";
import { createLead } from "@/lib/leads";

export const runtime = "nodejs";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  captchaToken: string;
}

// Verify reCAPTCHA token
async function verifyCaptcha(token: string): Promise<boolean> {
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    console.error("RECAPTCHA_SECRET_KEY is not configured");
    throw new Error("RECAPTCHA_SECRET_KEY is not configured");
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      { method: "POST" }
    );
    const data = await response.json();

    // Log the full response for debugging
    console.log("reCAPTCHA verification response:", JSON.stringify(data, null, 2));

    if (!data.success) {
      console.error("reCAPTCHA verification failed:", {
        success: data.success,
        errorCodes: data["error-codes"],
        hostname: data.hostname,
      });
    }

    return data.success === true;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, subject, message, captchaToken } = body;

    if (!name || !email || !phone || !subject || !message || !captchaToken) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const captchaValid = await verifyCaptcha(captchaToken);
    if (!captchaValid) {
      return NextResponse.json(
        { error: "Captcha verification failed" },
        { status: 400 }
      );
    }

    // Store the submission as a lead in the admin portal.
    await createLead({
      type: "contact",
      name: body.name,
      email: body.email,
      company: body.company || null,
      phone: body.phone || null,
      message: body.message || null,
      payload: { subject: body.subject },
    });

    return NextResponse.json(
      { success: true, message: "Your message has been received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
