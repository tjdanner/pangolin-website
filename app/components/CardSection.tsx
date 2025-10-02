import ServiceCard from "./ServiceCard";

export default function CardSection({
  title,
  cards,
  backgroundColor = "bg-black",
}: {
  title: string;
  cards: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
  }>;
  backgroundColor?: string;
}) {
  return (
    <section className={`p-[5%] flex flex-col items-center ${backgroundColor}`}>
      <div className="flex flex-col gap-6 lg:gap-8 lg:max-w-screen-xl">
        <h1 className="text-2xl lg:text-4xl font-semibold">{title}</h1>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {cards.map((card, index) => (
            <ServiceCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              href={card.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
