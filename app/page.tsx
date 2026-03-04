import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
//import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Career from '@/components/Career';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Career />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}