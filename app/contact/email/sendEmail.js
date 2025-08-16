import { Resend } from "resend";
import { EmailTemplate } from "./emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ from, name, subject, message }) {
  try {
    await resend.emails.send({
      from: "Kontak Website <no-reply@domainanda.com>",
      to: ["emailanda@domain.com"], // Ganti dengan email Anda
      subject: subject,
      react: EmailTemplate({ name, email: from, message }),
      reply_to: from,
    });
  } catch (error) {
    throw error;
  }
}
