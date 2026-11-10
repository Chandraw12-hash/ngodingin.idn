interface SectionHeaderProps {
  /** Nomor urut section, mis. "01" */
  num: string;
  /** Label kicker (monospace uppercase), mis. "Layanan" */
  kicker: string;
  title: string;
  subtitle?: string;
  id?: string;
}

/**
 * Header section ala porto-chandraw.vercel.app:
 * kicker monospace bernomor + judul serif besar, rata kiri.
 */
export default function SectionHeader({ num, kicker, title, subtitle, id }: SectionHeaderProps) {
  return (
    <div className="mb-10 sm:mb-14">
      <p
        aria-hidden
        className="font-mono text-[12px] uppercase tracking-[0.14em] text-faint"
      >
        <span className="mr-3 text-accent">{num}</span>
        {kicker}
      </p>

      <h2 id={id} className="mt-4 text-3xl text-ink md:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-[62ch] text-[15px] leading-[1.75] text-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}
