// src/components/ContactForm.jsx
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulasi pengiriman data (ganti dengan API call sesungguhnya)
      console.log("Data yang dikirim:", formData);

      // Contoh pengiriman ke API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (response.ok) {
      // Berhasil mengirim
      setTimeout(() => {
        setSubmitStatus("success");
        setIsSubmitting(false);
        setFormData({ name: "", email: "", message: "" });

        // Reset status setelah 3 detik
        setTimeout(() => setSubmitStatus(null), 3000);
      }, 1500);
      // } else {
      //   throw new Error('Gagal mengirim pesan');
      // }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
      setIsSubmitting(false);

      // Reset status error setelah 3 detik
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <div className="p-8 border bg-white h-5/6 md:mt-8 mt-1  border-white/60 rounded-lg shadow-md">
      <h2 className="hidden sm:flex text-6xl text-primary font-bold mb-4">
        Lets Connect
      </h2>

      {submitStatus === "success" && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded border border-green-400">
          Succesfully Send, Thank For your support.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded border border-red-400">
          Error your message dont sending.
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt:0 md:mt-14 space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 pl-6 text-primary  bg-transparent border border-primary rounded"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 pl-6 text-primary bg-transparent border border-primary rounded"
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 pl-6 text-primary bg-transparent border border-primary rounded"
            rows="4"
            required
          ></textarea>
        </div>
        <Button
          type="submit"
          variant="outline"
          disabled={isSubmitting}
          className="relative h-10 w-full rounded-lg border border-primary uppercase flex items-center gap-2 px-8 py-6 bg-gradient-to-t from-primary via-primary/95 to-primary/90 hover:bg-primary/85 text-white hover:scale-y-105 hover:border-primary/50 hover:text-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="font-normal">Mengirim...</span>
          ) : (
            <span className="font-normal">Send Message</span>
          )}
        </Button>
      </form>
    </div>
  );
}
