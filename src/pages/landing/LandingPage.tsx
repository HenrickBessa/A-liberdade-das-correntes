import { Seo } from "@/components/Seo";
import { Hero } from "@/components/sections/Hero";
import { Prologue } from "@/components/sections/Prologue";
import { Journey } from "@/components/sections/Journey";
import { Chapters } from "@/components/sections/Chapters";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Testimonials } from "@/components/sections/Testimonials";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { Faq } from "@/components/sections/Faq";
import { CTA } from "@/components/sections/CTA";

/** Landing de conversão — rota `/` */
export default function LandingPage() {
  return (
    <>
      <Seo />
      <main>
        <Hero />
        <Prologue />
        <Journey />
        <Chapters />
        <Ecosystem />
        <Testimonials />
        <LeadMagnet />
        <Faq />
        <CTA />
      </main>
    </>
  );
}
