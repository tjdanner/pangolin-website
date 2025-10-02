export default function Button({
  children,
  href,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const baseClasses =
    "inline-block px-4 py-2 mt-4 bg-accent text-white text-base rounded-full hover:bg-accent/80 transition-colors duration-350";
  const combinedClasses = `${baseClasses} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
