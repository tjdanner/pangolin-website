import { ReactNode } from "react";
import Banner from "./Banner";
import TextSection from "./TextSection";
import CardSection from "./CardSection";
import ProcessSection from "./ProcessSection";
import FormSection from "./FormSection";

interface ServicePageTemplateProps {
  title: string;
  subtitle?: string;

  heroSection?: {
    title: string;
    paragraphs: string[];
    imageSrc: string;
    imageAlt: string;
    imagePosition?: "left" | "right";
  };

  cardsSection?: {
    title: string;
    cards: Array<{
      icon: ReactNode;
      title: string;
      description: string;
      href?: string;
    }>;
  };

  additionalSections?: Array<{
    title: string;
    paragraphs: string[];
    imageSrc: string;
    imageAlt: string;
    imagePosition?: "left" | "right";
  }>;

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

  formSection?: {
    title?: string;
    subtitle?: string;
    backgroundColor?: string;
  };

  showFormSection?: boolean;
}

export default function ServicePageTemplate({
  title,
  subtitle,
  heroSection,
  cardsSection,
  additionalSections = [],
  processSection,
  formSection,
  showFormSection = true,
}: ServicePageTemplateProps) {
  return (
    <main className="min-h-screen bg-background">
      <Banner title={title} subtitle={subtitle} backgroundColor="bg-accent" />

      {heroSection && (
        <TextSection
          title={heroSection.title}
          paragraphs={heroSection.paragraphs}
          imageSrc={heroSection.imageSrc}
          imageAlt={heroSection.imageAlt}
          imagePosition={heroSection.imagePosition}
        />
      )}

      {cardsSection && (
        <CardSection title={cardsSection.title} cards={cardsSection.cards} />
      )}

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

      {processSection && (
        <ProcessSection
          title={processSection.title}
          paragraphs={processSection.paragraphs}
          steps={processSection.steps}
          imageSrc={processSection.imageSrc}
          imageAlt={processSection.imageAlt}
        />
      )}

      {showFormSection && (
        <FormSection
          title={formSection?.title}
          subtitle={formSection?.subtitle}
          backgroundColor={formSection?.backgroundColor}
        />
      )}
    </main>
  );
}
