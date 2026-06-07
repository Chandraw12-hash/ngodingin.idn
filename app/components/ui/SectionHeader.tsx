interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ badge, title, subtitle, center = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {badge && (
        <div className={`mb-3 ${center ? "flex justify-center" : ""}`}>
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}