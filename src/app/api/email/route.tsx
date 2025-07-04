import { type NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

import { ContactEmail } from '@/components/email'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email, subject, message } = await request.json();

  const { data, error } = await resend.emails.send({
    from: 'Sabo - Personal site <noreply@matija-sabolic.from.hr>',
    to: 'matijasaboli37@gmail.com',
    replyTo: email,
    subject: subject,
    react: <ContactEmail name={name} email={email} subject={subject} message={message} />
  });

  if (error) {
    return NextResponse.json(
        { 
          status: 500,
          message: error.message 
        },
        { status: 500 }
    );
  }

  return NextResponse.json(
      { 
        status: 200,
        message: data?.id 
      },
      { status: 200 }
  );
}