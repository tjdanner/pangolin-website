export default function ProcessSection({
  title,
  paragraphs,
  steps,
  backgroundColor = "bg-black",
}: {
  title: string;
  paragraphs: string[];
  steps: Array<{
    stepNumber: number;
    title: string;
    description: string;
  }>;
  backgroundColor?: string;
}) {
  return (
    <section className={`p-[5%] flex justify-center items-center`}>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 lg:max-w-screen-xl">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl lg:text-4xl font-semibold">{title}</h1>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base">
              {paragraph}
            </p>
          ))}
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
