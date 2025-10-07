interface FormGroupProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  rows?: number;
  placeholder?: string;
}

export default function FormGroup({
  label,
  name,
  type = "text",
  required = false,
  rows = 4,
  placeholder,
}: FormGroupProps) {
  const inputClasses =
    "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent";

  return (
    <div className="form-group">
      <label htmlFor={name} className="block text-sm font-medium mb-1">
        {label} {required && "*"}
      </label>

      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={rows}
          placeholder={placeholder}
          className={`${inputClasses} resize-vertical`}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          className={inputClasses}
        />
      )}
    </div>
  );
}
