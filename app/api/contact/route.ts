// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend"; // Import Resend SDK

// --- Configuration from Environment Variables ---
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RECIPIENT_EMAIL = process.env.CONTACT_FORM_RECIPIENT_EMAIL;
const RESEND_VERIFIED_SENDER_EMAIL = process.env.RESEND_VERIFIED_SENDER_EMAIL; // This email's domain MUST be verified in Resend

// --- Resend Client Setup ---
// Instantiate Resend client outside the handler to avoid re-creating on every request
const resend = new Resend(RESEND_API_KEY);

// --- POST Handler for Contact Form Submissions ---
export async function POST(request: Request) {
  // Check for critical environment variables at request time
  if (!RESEND_API_KEY || !RECIPIENT_EMAIL || !RESEND_VERIFIED_SENDER_EMAIL) {
    console.error(
      "Missing environment variables for Resend email sending. Please check .env.local."
    );
    return NextResponse.json(
      { message: "Server email configuration error. Please try again later." },
      { status: 500 }
    );
  }

  try {
    // Parse the JSON body from the frontend request
    const { firstName, lastName, email, phone, company, message } =
      await request.json();

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        {
          message:
            "Missing required form fields (First Name, Last Name, Email, Message).",
        },
        { status: 400 }
      );
    }

    // Construct the email content
    const mailContentHtml = `
      <h1>New Contact Form Submission for Arcnetic</h1>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${message}</p>
      <hr/>
      <p><em>This email was sent from your Arcnetic website contact form.</em></p>
    `;

    const mailContentText = `New Arcnetic Inquiry:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${
      phone || "N/A"
    }\nCompany: ${company || "N/A"}\nMessage:\n${message}`; // Plain text fallback

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: `Arcnetic Website <${RESEND_VERIFIED_SENDER_EMAIL}>`, // Sender email MUST be from a domain verified in Resend
      to: [RECIPIENT_EMAIL], // Resend 'to' accepts an array of strings
      subject: `New Arcnetic Inquiry from ${firstName} ${lastName}`,
      html: mailContentHtml,
      text: mailContentText,
      replyTo: email,
    });

    if (error) {
      console.error("Error sending email with Resend:", error);
      return NextResponse.json(
        { message: error.message || "Failed to send message via Resend." },
        { status: 500 }
      );
    }

    // Return success response to the frontend
    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error in contact form handler:", error);
    return NextResponse.json(
      { message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
