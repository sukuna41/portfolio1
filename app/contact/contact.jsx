// src/app/contact/page.jsx (atau page.tsx)
"use client";

import ContactInfo from "@/app/contact/components/ContactInfo";
import ContactForm from "@/app/contact/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="pt-4 mb-32 sm:mb-0 h-max">
      <div className="px-6 my-0 sm:my-4 md:pb-20 md:my-2 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
          <div className="w-full lg:w-1/4 -2 md:-1">
            <ContactInfo />
          </div>
          <div className="w-full lg:w-3/4 -1 md:-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
