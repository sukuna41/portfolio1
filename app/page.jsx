"use client";
import { Suspense } from "react";
import Home from "./home/home.jsx";
import About from "./about/about.jsx";
import Resume from "./resume/resume.jsx";
import Contact from "./contact/contact.jsx";
import ScrollHandler from "../components/ScrollHandler.jsx";

export default function Page() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollHandler />
      </Suspense>
      {/* <GridBackground /> */}
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
