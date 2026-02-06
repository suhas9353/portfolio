import ScrollyCanvas from "./components/ScrollyCanvas";
import Overlay from "./components/Overlay";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";

export default function Home() {
  return (
    <main className="relative bg-[#121212] min-h-screen text-white">
      <Navbar />
      <ScrollyCanvas />
      <Overlay />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
