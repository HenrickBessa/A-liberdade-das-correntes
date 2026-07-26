import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
}

export function Button({ children, href, to, onClick, variant = "primary" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-brand-accent text-brand-bg hover:opacity-90"
      : "border border-brand-muted text-brand-ink hover:border-brand-accent hover:text-brand-accent";

  const className = `${base} ${styles}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}
