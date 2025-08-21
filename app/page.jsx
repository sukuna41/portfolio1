"use client";
import { Suspense } from "react";
import Home from "./home/page.jsx";
import About from "./about/page.jsx";
import Resume from "./resume/page.jsx";
import Contact from "./contact/page.jsx";
import ScrollHandler from "../components/ScrollHandler";
import GridBackground from "@/components/effects/GridBackground";

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
