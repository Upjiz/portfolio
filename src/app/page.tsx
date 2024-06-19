import Image from "next/image";

import DuoSection from "@/components/DuoSection";

import ContactForm from "@/components/ContactForm";
import Pricing from "@/components/Pricing";
import Hero from "@/components/Hero";
import Services from "@/components/Service2";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <DuoSection />
      <Pricing />
      <ContactForm />
    </>
  );
}
