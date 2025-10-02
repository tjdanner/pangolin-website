import Image from "next/image";

export default function TextSection({
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  imagePosition = "right",
}: {
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}) {
  const imageElement = (
    <Image
      className="lg:w-1/2"
      src={imageSrc}
      alt={imageAlt}
      width={400}
      height={300}
    />
  );

  const textElement = (
    <div className="flex flex-col gap-2 lg:w-1/2">
      <h1 className="text-2xl lg:text-4xl font-semibold">{title}</h1>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-base">
          {paragraph}
        </p>
      ))}
    </div>
  );

  return (
    <section className="flex justify-center p-[5%]">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16 lg:max-w-screen-xl">
        {imagePosition === "left" ? (
          <>
            {imageElement}
            {textElement}
          </>
        ) : (
          <>
            {textElement}
            {imageElement}
          </>
        )}
      </div>
    </section>
  );
}
