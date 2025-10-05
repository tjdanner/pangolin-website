import Button from "./Button";

export default function ContactForm({
  title = "Get Started Today",
  description = "Ready to secure your network? Contact our security experts for a free consultation and custom protection plan.",
  buttonText = "Get Free Consultation",
  backgroundColor = "bg-black",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
  backgroundColor?: string;
}) {
  return (
    <section className={`p-[5%] ${backgroundColor}`}>
      <div className="flex flex-col gap-6 max-w-screen-md mx-auto">
        {/* Context */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl lg:text-4xl font-semibold">{title}</h2>
          <p className="text-base">{description}</p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              className="p-3 bg-background border border-accent rounded-lg text-white focus:border-accent/80 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="p-3 bg-background border border-accent rounded-lg text-white focus:border-accent/80 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              className="p-3 bg-background border border-accent rounded-lg text-white focus:border-accent/80 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Company</label>
            <input
              type="text"
              className="p-3 bg-background border border-accent rounded-lg text-white focus:border-accent/80 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Message</label>
            <textarea
              rows={4}
              className="p-3 bg-background border border-accent rounded-lg text-white focus:border-accent/80 focus:outline-none resize-none"
            />
          </div>

          <div className="self-start">
            <Button>{buttonText}</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
