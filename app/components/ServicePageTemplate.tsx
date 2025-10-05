import { ReactNode } from "react";
import Banner from "./Banner";
import TextSection from "./TextSection";
import CardSection from "./CardSection";
import ProcessSection from "./ProcessSection";
import ContactForm from "./ContactForm";

interface ServicePageTemplateProps {
  // Banner props
  title: string;
  subtitle?: string;

  // Hero section props
  heroSection?: {
    title: string;
    paragraphs: string[];
    imageSrc: string;
    imageAlt: string;
    imagePosition?: "left" | "right";
  };

  // Cards section props
  cardsSection?: {
    title: string;
    cards: Array<{
      icon: ReactNode;
      title: string;
      description: string;
      href?: string;
    }>;
  };

  // Additional text sections
  additionalSections?: Array<{
    title: string;
    paragraphs: string[];
    imageSrc: string;
    imageAlt: string;
    imagePosition?: "left" | "right";
  }>;

  // Process section props
  processSection?: {
    title: string;
    paragraphs: string[];
    steps: Array<{
      stepNumber: number;
      title: string;
      description: string;
    }>;
    imageSrc: string;
    imageAlt: string;
  };

  // End CTA props
  endCTA?: {
    title: string;
    paragraph: string;
    buttonText: string;
    buttonHref?: string;
    backgroundImage: string;
  };

  // Contact form customization
  showContactForm?: boolean;
  contactFormTitle?: string;
}

export default function ServicePageTemplate({
  title,
  subtitle,
  heroSection,
  cardsSection,
  additionalSections = [],
  processSection,
  endCTA,
  showContactForm = true,
  contactFormTitle = "Get Started Today",
}: ServicePageTemplateProps) {
  return (
    <main className="min-h-screen bg-background">
      {/* Banner */}
      <Banner title={title} subtitle={subtitle} backgroundColor="bg-accent" />

      {/* Hero Section */}
      {heroSection && (
        <TextSection
          title={heroSection.title}
          paragraphs={heroSection.paragraphs}
          imageSrc={heroSection.imageSrc}
          imageAlt={heroSection.imageAlt}
          imagePosition={heroSection.imagePosition}
        />
      )}

      {/* Cards Section */}
      {cardsSection && (
        <CardSection title={cardsSection.title} cards={cardsSection.cards} />
      )}

      {/* Additional Text Sections */}
      {additionalSections.map((section, index) => (
        <TextSection
          key={index}
          title={section.title}
          paragraphs={section.paragraphs}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          imagePosition={section.imagePosition}
        />
      ))}

      {/* Process Section */}
      {processSection && (
        <ProcessSection
          title={processSection.title}
          paragraphs={processSection.paragraphs}
          steps={processSection.steps}
          imageSrc={processSection.imageSrc}
          imageAlt={processSection.imageAlt}
        />
      )}

      {/* End CTA */}
      {endCTA && (
        <EndCTASection
          title={endCTA.title}
          paragraph={endCTA.paragraph}
          buttonText={endCTA.buttonText}
          buttonHref={endCTA.buttonHref}
          backgroundImage={endCTA.backgroundImage}
        />
      )}

      {/* Contact Form */}
      {showContactForm && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-black">
              {contactFormTitle}
            </h2>
            <ContactForm />
          </div>
        </section>
      )}
    </main>
  );
}
