export default function Button({
  children,
  href,
  onClick,
  type = "button",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}) {
  const baseClasses =
    "inline-block px-5 py-2 mt-4 bg-accent text-white text-base rounded-full hover:bg-accent/80 transition-colors duration-350";
  const combinedClasses = `${baseClasses} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
