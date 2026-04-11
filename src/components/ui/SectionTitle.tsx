interface SectionTitleProps {
  children: React.ReactNode;
  align?: "left" | "center";
  subtitle?: string;
}

export function SectionTitle({
  children,
  align = "left",
  subtitle,
}: SectionTitleProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start";

  return (
    <div className={`flex flex-col gap-4 mb-12 ${alignment}`}>
      <h2 className="font-display text-4xl md:text-5xl font-light tracking-wide text-text-cream">
        {children}
      </h2>
      <div
        className="h-px bg-gold"
        style={{ width: "48px" }}
      />
      {subtitle && (
        <p className="font-body text-sm text-text-cream/50 mt-1">{subtitle}</p>
      )}
    </div>
  );
}
