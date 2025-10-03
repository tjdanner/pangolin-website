import Button from "./Button";

export default function ServiceCard({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
}) {
  return (
    <div className="flex flex-col items-start gap-1 lg:w-1/3 p-6 bg-background border-2 border-accent rounded-xl hover:shadow-lg hover:shadow-accent/50 hover:-translate-y-2 transition-all duration-400">
      <div className="mb-2 lg:mb-3 text-5xl text-accent">{icon}</div>
      <h2 className="text-xl lg:text-2xl font-semibold">{title}</h2>
      <p className="text-base">{description}</p>
      {href && (
        <Button href={href} className="mt-4">
          Learn More
        </Button>
      )}
    </div>
  );
}
