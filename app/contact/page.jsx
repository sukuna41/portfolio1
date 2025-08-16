// src/app/contact/page.jsx (atau page.tsx)
"use client";

import ContactInfo from "@/app/contact/components/ContactInfo";
import ContactForm from "@/app/contact/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="pt-4 bg-primary h-max">
      <div className="px-24">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4">
            <ContactInfo />
          </div>
          <div className="w-full lg:w-3/4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
