import ContactForm from "./ContactForm";

interface FormSectionProps {
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
}

export default function FormSection({
  title = "Get Started Today",
  subtitle,
  backgroundColor = "bg-white",
}: FormSectionProps) {
  return (
    <section className={`py-16 lg:py-24 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
