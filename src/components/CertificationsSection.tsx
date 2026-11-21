import {CERTIFICATIONS} from '../data/portfolio';

interface CertificationsSectionProps {
  onSelectCertificate: (index: number) => void;
}

export function CertificationsSection({onSelectCertificate}: CertificationsSectionProps) {
  return (
    <section
      id="certifications"
      className="border-b border-[rgba(231,237,246,0.08)] py-20"
    >
      <div className="mx-auto max-w-[1040px] px-7">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-[13px] tracking-[0.08em] text-[#8ea0bd]">
              <span className="inline-block h-px w-[18px] bg-gradient-to-r from-[#5eead4] to-[#8b5cf6]" />
              <span>05 — Certifications</span>
            </div>
            <h2 className="font-display mt-1 text-[clamp(26px,4vw,38px)] font-bold tracking-[-0.01em] text-[#e7edf6]">
              Courses &amp; Certifications
            </h2>
          </div>

          <p className="max-w-[280px] font-mono text-xs text-[#8ea0bd] sm:text-right">
            Click any card to view the original certificate
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, index) => (
            <button
              key={cert.id}
              type="button"
              onClick={() => onSelectCertificate(index)}
              aria-label={`View certificate: ${cert.name} from ${cert.issuer}`}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-[14px] border border-[rgba(231,237,246,0.08)] bg-[#101826] text-left transition duration-200 hover:-translate-y-0.5 hover:border-[#5eead4] hover:shadow-[0_14px_30px_-18px_rgba(94,234,212,0.35),0_14px_30px_-18px_rgba(139,92,246,0.2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5eead4]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[rgba(231,237,246,0.08)] bg-[#0d1422]">
                <img
                  src={cert.imageSrc}
                  alt={`${cert.name} certificate`}
                  loading="lazy"
                  className="block h-full w-full object-cover object-top saturate-90 transition duration-300 group-hover:scale-[1.04] group-hover:saturate-105"
                />
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-b from-transparent via-transparent to-[#0a0f1a]/85 pb-4 font-mono text-[13px] text-[#5eead4] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  View certificate ↗
                </div>
              </div>

              <div className="flex flex-1 flex-col p-4.5">
                <div className="font-display mb-1.5 min-h-[38px] text-[14.5px] leading-[1.3] font-semibold text-[#e7edf6]">
                  {cert.name}
                </div>
                <div className="font-mono text-[11.5px] uppercase tracking-[0.04em] text-[#5eead4]">
                  {cert.issuer}
                </div>
                <div className="mt-1.5 font-mono text-[11.5px] text-[#8ea0bd]">{cert.date}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
