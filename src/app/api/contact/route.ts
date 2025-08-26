// src/app/api/contact/route.ts
import { Resend } from 'resend';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    if (!firstName || !lastName || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['nicole.nghi.trieu@gmail.com'],
      replyTo: email, // visitor's email address
      subject: `New contact from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return Response.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}