import Home from "./home/page";
import About from "./about/page";
import Resume from "./resume/page";
import Contact from "./contact/page";

export default function Page() {
  return (
    <main>
      <section id="home" className="mb-0">
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
