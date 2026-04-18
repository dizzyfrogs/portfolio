import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://suleiman.dev",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Suleiman Mejd",
  url: "https://suleiman.dev",
  email: "symejd@gmail.com",
  jobTitle: "Full-Stack Developer",
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Old Dominion University" },
    { "@type": "CollegeOrUniversity", name: "Germanna Community College" },
  ],
  sameAs: [
    "https://github.com/dizzyfrogs",
    "https://www.linkedin.com/in/suleiman-mejd/",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
