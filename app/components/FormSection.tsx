import FormGroup from "./FormGroup";
import Button from "./Button";

export default function FormSection({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <section className="form-section p-[5%]">
      <div className="form-content flex flex-col">
        <div className="form-context flex flex-col gap-2">
          <h1 className="text-2xl lg:text-4xl font-semibold">{title}</h1>
          <p className="text-base">{text}</p>
        </div>
        <form action="" className="flex flex-col gap-4">
          form
          <Button />
        </form>
      </div>
    </section>
  );
}
