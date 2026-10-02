import React from "react";

interface GoldButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  large?: boolean;
  variant?: "solid" | "outline" | "ghost";
  external?: boolean;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
}

export function GoldButton({
  href,
  onClick,
  children,
  large = false,
  variant = "solid",
  external = false,
  className = "",
  type = "button",
  disabled = false,
  ariaLabel,
}: GoldButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 font-body font-semibold uppercase tracking-[0.18em] rounded transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40";

  const sizes = large ? "px-8 py-4 text-[13px]" : "px-6 py-3 text-xs";

  const variants = {
    solid: "bg-gold text-navy-950 hover:bg-gold-light",
    outline:
      "border border-gold/70 text-gold-light hover:bg-gold hover:text-navy-950 hover:border-gold",
    ghost: "text-cream/80 hover:text-gold-light",
  };

  const classes = `${base} ${sizes} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
    </button>
  );
}
