type SectionHeadingProps = {
  title: string;
  description: string;
  centered?: boolean;
  maxWidthClassName?: string;
};

export function SectionHeading({
  title,
  description,
  centered = false,
  maxWidthClassName = "max-w-lg",
}: SectionHeadingProps) {
  const alignmentClassName = centered ? "text-center" : "";
  const accentClassName = centered ? "mx-auto" : "";
  const widthClassName = centered ? "mx-auto max-w-md" : maxWidthClassName;

  return (
    <div className={`${widthClassName} ${alignmentClassName}`.trim()}>
      <div className={`line-accent mb-5 ${accentClassName}`.trim()} />
      <h2 className="font-[family-name:var(--font-display)] text-4xl font-medium tracking-tight md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
    </div>
  );
}
