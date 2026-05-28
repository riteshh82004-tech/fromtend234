interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-8 sm:mb-10 ${centered ? "text-center" : ""} ${className}`}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base-content/70 mx-auto mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
