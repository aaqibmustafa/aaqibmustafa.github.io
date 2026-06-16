import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { GitHub } from "./components/sections/GitHub";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <GitHub />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
