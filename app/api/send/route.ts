import EmailTemplate from '@/components/email/email-template';
import type { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_API_KEY_RESEND);

export async function POST(req: Request, res: NextApiResponse) {
  const { name, lastname, email, phone, message } = await req.json();
  if (!name || !lastname || !email || !phone || !message) {
    throw new Error("Bad Request");
  }
  const { data, error } = await resend.emails.send({
    from: 'BonnyJoyasLanding <onboarding@resend.dev>',
    to: ['fabioleofc@gmail.com'],
    subject: 'Contacto Bonny Joyas',
    react: EmailTemplate({ name, lastname, email, phone, message })
  });

  if (error) {
    return NextResponse.json(error, { status: 400 });
  }

  return NextResponse.json({ message: "Datos enviados exitosamente" });
}
