import { Phone } from "lucide-react";

interface CallButtonProps {
  href: string;
  label: string;
  sublabel?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  showIcon?: boolean;
}

const variants = {
  primary:
    "bg-gold text-charcoal hover:bg-gold-dark shadow-lg shadow-gold/25 hover:shadow-gold/40",
  secondary:
    "bg-charcoal text-white hover:bg-charcoal/90 shadow-lg shadow-charcoal/20",
  outline:
    "border-2 border-white/30 bg-transparent text-white hover:border-gold hover:bg-gold/10",
  ghost:
    "border-2 border-charcoal/15 bg-white text-charcoal hover:border-gold hover:bg-gold/5",
};

export function CallButton({
  href,
  label,
  sublabel,
  variant = "primary",
  className = "",
  showIcon = true,
}: CallButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-300 md:text-base ${variants[variant]} ${className}`}
    >
      {showIcon && <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />}
      <span className="flex flex-col items-start leading-tight">
        <span>{label}</span>
        {sublabel && (
          <span className="text-xs font-medium opacity-80">{sublabel}</span>
        )}
      </span>
    </a>
  );
}
