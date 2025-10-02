import Button from "./Button";

export default function EndCTASection({
  title,
  paragraph,
  buttonText,
  buttonHref,
  backgroundImage,
}: {
  title: string;
  paragraph: string;
  buttonText: string;
  buttonHref?: string;
  backgroundImage: string;
}) {
  return (
    <section
      className="relative flex justify-center p-[5%] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-2 max-w-screen-md text-center">
        <h1 className="text-2xl lg:text-4xl font-semibold text-white">
          {title}
        </h1>
        <p className="text-base lg:text-xl text-white">{paragraph}</p>
        <Button href={buttonHref}>{buttonText}</Button>
      </div>
    </section>
  );
}
