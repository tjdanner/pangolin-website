import Image from "next/image";

export default function ProcessSection({
  title,
  paragraphs,
  steps,
  backgroundColor = "bg-black",
  imageSrc,
  imageAlt,
}: {
  title: string;
  paragraphs: string[];
  steps: Array<{
    stepNumber: number;
    title: string;
    description: string;
  }>;
  backgroundColor?: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <section
      className={`process-section p-[5%] flex justify-center items-center`}
    >
      <div className="process-content flex flex-col lg:items-center lg:flex-row gap-6 lg:gap-16 lg:max-w-screen-xl">
        <div className="process-context flex flex-col text-center lg:text-left items-center lg:items-start gap-2 lg:w-[350px]">
          <h1 className="text-2xl lg:text-4xl font-semibold">{title}</h1>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base">
              {paragraph}
            </p>
          ))}
          <Image
            className="process-img mt-2 lg:mt-4 lg:w-[300px]"
            src={imageSrc}
            alt={imageAlt}
            width={200}
            height={300}
          />
        </div>

        <div className="flex flex-col gap-5 lg:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-6 p-6 bg-black border-2 border-accent rounded-xl hover:shadow-lg hover:shadow-accent/50 hover:-translate-y-2 transition-all duration-400"
            >
              {/* Step Number - STYLE THIS */}
              <div className="text-accent text-6xl font-bold">
                {step.stepNumber}
              </div>

              {/* Step Content - STYLE THIS */}
              <div className="/* ADD STEP CONTENT STYLING */">
                <h2 className="text-xl lg:text-2xl font-semibold">
                  {step.title}
                </h2>
                <p className="text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
