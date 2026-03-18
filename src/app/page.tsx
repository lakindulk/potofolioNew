import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1A2F3F] dark:bg-[#0F172A] dark:text-[#F8FAFC] selection:bg-[#3E7B6C] selection:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
