// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// --- Configuration from Environment Variables ---
const SENDER_EMAIL = process.env.EMAIL_SERVER_USER;
const SENDER_PASSWORD = process.env.EMAIL_SERVER_PASSWORD;
const RECIPIENT_EMAIL = process.env.CONTACT_FORM_RECIPIENT_EMAIL;

// --- Validate Environment Variables ---
if (!SENDER_EMAIL || !SENDER_PASSWORD || !RECIPIENT_EMAIL) {
  console.error(
    "Missing environment variables for email sending. Please check .env.local."
  );
  // In a real application, you might want to throw an error or handle this more gracefully on startup.
}

// --- Nodemailer Transporter Setup ---
const transporter = nodemailer.createTransport({
  service: "gmail", // You can change this to 'Outlook', 'Yahoo', or use a custom SMTP host
  auth: {
    user: SENDER_EMAIL,
    pass: SENDER_PASSWORD,
  },
  // Optional: Add logging for debugging
  // logger: true,
  // debug: true,
});

// --- POST Handler for Contact Form Submissions ---
export async function POST(request: Request) {
  if (!SENDER_EMAIL || !SENDER_PASSWORD || !RECIPIENT_EMAIL) {
    return NextResponse.json(
      { message: "Server email configuration error. Please try again later." },
      { status: 500 }
    );
  }

  try {
    // Parse the JSON body from the frontend request
    const { firstName, lastName, email, phone, company, message } =
      await request.json();

    // Basic validation (you can add more robust validation here, e.g., with Zod)
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
    const mailContent = `
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

    // Define email options
    const mailOptions = {
      from: `Arcnetic Website <${SENDER_EMAIL}>`, // Display name for the sender
      to: RECIPIENT_EMAIL, // The hardcoded recipient
      replyTo: email, // Set the user's email as reply-to for easy reply
      subject: `New Arcnetic Inquiry from ${firstName} ${lastName}`,
      html: mailContent,
      text: `New Arcnetic Inquiry:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${
        phone || "N/A"
      }\nCompany: ${company || "N/A"}\nMessage:\n${message}`, // Plain text fallback
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response to the frontend
    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    // Provide a more generic error message to the client for security
    return NextResponse.json(
      { message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
