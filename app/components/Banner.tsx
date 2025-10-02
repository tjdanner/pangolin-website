export default function Banner({
  title,
  subtitle,
  backgroundColor = "bg-black",
}: {
  title: string;
  subtitle?: string;
  backgroundColor?: string;
}) {
  return (
    <section className={`p-[5%] ${backgroundColor}`}>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl lg:text-6xl font-semibold">{title}</h1>
        {subtitle && (
          <p className="text-xl lg:text-2xl font-semibold">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
