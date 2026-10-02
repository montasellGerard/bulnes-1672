interface SectionTitleProps {
  children: React.ReactNode;
  eyebrow?: string;
  align?: "left" | "center";
  subtitle?: string;
}

export function SectionTitle({
  children,
  eyebrow,
  align = "left",
  subtitle,
}: SectionTitleProps) {
  const center = align === "center";

  return (
    <div
      className={`flex flex-col gap-4 mb-12 ${center ? "items-center text-center" : "items-start"}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.1] text-cream text-balance">
        {children}
      </h2>
      <Ornament />
      {subtitle && (
        <p
          className={`font-body text-base text-cream/65 leading-relaxed max-w-xl ${center ? "" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center gap-2 text-gold ${className}`}
    >
      <span className="h-px w-10 bg-gold/60" />
      <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
        <path d="M5 0 6.2 3.8 10 5 6.2 6.2 5 10 3.8 6.2 0 5 3.8 3.8Z" />
      </svg>
      <span className="h-px w-10 bg-gold/60" />
    </div>
  );
}
