import React from "react";

interface GoldButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  large?: boolean;
  variant?: "solid" | "outline";
  external?: boolean;
  className?: string;
  type?: "button" | "submit";
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
}: GoldButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-body font-medium tracking-widest uppercase text-sm rounded transition-colors duration-200 cursor-pointer";

  const sizes = large ? "px-10 py-4 text-base" : "px-8 py-3";

  const variants = {
    solid:
      "bg-gold hover:bg-gold-dim text-bg-base",
    outline:
      "bg-transparent border border-gold text-gold hover:bg-gold hover:text-bg-base",
  };

  const classes = `${base} ${sizes} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
