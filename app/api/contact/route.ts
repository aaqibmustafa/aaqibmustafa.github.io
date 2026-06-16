import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'aaqibmustafa533@gmail.com',
        pass: 'xzxi bhft dwta iykk', // App Password provided by user
      },
    });

    const mailOptions = {
      from: 'aaqibmustafa533@gmail.com', // Sent from the authenticated email
      to: 'aaqibmustafa533@gmail.com',   // Delivered to the same email
      replyTo: email,                    // Allows you to reply directly to the sender
      subject: `New Portfolio Contact Message from ${name}`,
      text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
