import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { IntroAnimation } from "@/components/layout/IntroAnimation";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { services } from "@/config/content";
import { siteConfig } from "@/config/site";

/** Datos estructurados (schema.org) para buscadores. */
function JsonLd() {
  const { social, contact } = siteConfig;
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    slogan: siteConfig.slogan,
    description: siteConfig.seo.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    founder: { "@type": "Person", name: siteConfig.founder },
    ...(contact.email ? { email: contact.email } : {}),
    sameAs: [social.instagram, social.tiktok].filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.description },
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <IntroAnimation />
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-neutral-950 focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
