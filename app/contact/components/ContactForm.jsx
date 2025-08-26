import { useState } from "react";
import { init, send } from "emailjs-com";
import FormLayout from "./FormLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Inisialisasi Email.js dengan User ID Anda
init("5AdO5dipeQDitAab-");

export default function ContactFormContainer() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await send("service_0q23x92", "template_mnuae05", templateParams);
      toast.success("Successfully sent! Thank you for your support.");
    } catch (error) {
      toast.error("Error: Your message didn't send.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 border bg-white md:mt-8 mt-1 border-white/60 rounded-lg shadow-md">
      <h1 className="hidden lg:flex text-7xl text-primary font-bold">
        Send <br /> Message
      </h1>
      <h1 className="relative lg:hidden flex pb-6 text-3xl md:text-6xl font-bold tracking-tight justify-center text-center lg:text-left w-full">
        <span className="relative inline-block mt-1">
          <span className="absolute -inset-2 bg-gradient-to-r from-accent-baja to-accent/80 blur-2xl opacity-20"></span>
          <span className="relative text-shadow-lg bg-gradient-to-t from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </span>
      </h1>

      <FormLayout onSubmit={handleSubmit} isSubmitting={isSubmitting} />

      {/* Toast Container for notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
