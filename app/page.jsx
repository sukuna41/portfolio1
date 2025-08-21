import Home from "./home/page";
import About from "./about/page";
import Resume from "./resume/page";
import Contact from "./contact/page";
import GridBackground from "@/components/effects/GridBackground";

export default function Page() {
  return (
    <main>
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
