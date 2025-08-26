// src/components/ContactForm/ContactForm.jsx
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactForm({ onSubmit, isSubmitting, submitStatus }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 pl-6 text-primary bg-transparent border border-primary rounded"
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="subject"
          placeholder="Your Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-2 pl-6 text-primary bg-transparent border border-primary rounded"
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
          rows="3"
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
          <span className="font-normal">Sending...</span>
        ) : (
          <span className="font-normal">Send Message</span>
        )}
      </Button>
    </form>
  );
}
