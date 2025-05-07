import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use 'smtp.ethereal.email' for testing
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO, // You can send to your own email
      subject: `Contact Form: ${subject}`,
      text: `
        New contact form submission:

        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}

        Message:
        ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent" });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}
