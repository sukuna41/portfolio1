// src/app/contact/page.jsx (atau page.tsx)
"use client";

import ContactInfo from "@/app/contact/components/ContactInfo";
import ContactForm from "@/app/contact/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="pt-4 mb-32 sm:mb-0 h-max">
      <div className="px-6 my-0 sm:my-4 md:pb-20 md:my-2 md:px-12 lg:px-24">
        <h1 className="text-5xl py-4 md:py-10 lg:pt-0 lg:text-7xl text-center font-bold tracking-tight">
          <div className="relative inline-block">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent-baja blur-3xl opacity-20"></div>
            <span className="relative bg-gradient-to-r from-white via-blue-100 to-green-200 bg-clip-text text-transparent">
              Contact
            </span>
          </div>
        </h1>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
          <div className="w-full lg:w-1/4 order-3 md:-1">
            <ContactInfo />
          </div>
          <div className="relative flex sm:hidden order-2 text-center justify-center">
            - OR -
          </div>
          <div className="w-full lg:w-3/4 order-1 md:-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
