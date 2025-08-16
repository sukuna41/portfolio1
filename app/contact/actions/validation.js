export function validateInput({ name, email, subject, message }) {
  if (!name || !email || !subject || !message) {
    return { isValid: false, message: "Semua field harus diisi" };
  }

  if (name.length < 3) {
    return { isValid: false, message: "Nama terlalu pendek" };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { isValid: false, message: "Email tidak valid" };
  }

  if (subject.length < 5) {
    return { isValid: false, message: "Subjek terlalu pendek" };
  }

  if (message.length < 10) {
    return { isValid: false, message: "Pesan terlalu pendek" };
  }

  return { isValid: true, message: "" };
}
