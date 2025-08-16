"use server";
import { sendEmail } from "@/app/contact/email/sendEmail";
import { validateInput } from "@/lib/email/validation";

export async function sendEmailAction(prevState, formData) {
  // Validasi input
  const validation = validateInput({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validation.isValid) {
    return { message: validation.message, isError: true };
  }

  try {
    await sendEmail({
      from: formData.get("email"),
      name: formData.get("name"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });

    return {
      message: "Pesan berhasil dikirim!",
      isError: false,
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      message: "Terjadi kesalahan saat mengirim pesan",
      isError: true,
    };
  }
}
