import {EDUCATION} from '../data/portfolio';

export function EducationSection() {
  return (
    <section
      id="education"
      className="border-b border-[rgba(231,237,246,0.08)] py-20"
    >
      <div className="mx-auto max-w-[1040px] px-7">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-[13px] tracking-[0.08em] text-[#8ea0bd]">
              <span className="inline-block h-px w-[18px] bg-gradient-to-r from-[#5eead4] to-[#8b5cf6]" />
              <span>04 — Education</span>
            </div>
            <h2 className="font-display mt-1 text-[clamp(26px,4vw,38px)] font-bold tracking-[-0.01em] text-[#e7edf6]">
              Academic Background
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-px overflow-hidden rounded-[14px] border border-[rgba(231,237,246,0.08)] bg-[rgba(231,237,246,0.08)]">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="grid grid-cols-1 items-center gap-2 bg-[#101826] px-6 py-5 sm:grid-cols-[120px_1fr_auto] sm:gap-5"
            >
              <div className="font-mono text-[13px] text-[#5eead4]">{edu.year}</div>
              <div>
                <div className="font-display text-[17px] font-semibold text-[#e7edf6]">
                  {edu.degree}
                </div>
                <div className="mt-1 text-[13.5px] text-[#8ea0bd]">{edu.institution}</div>
              </div>
              <div className="justify-self-start whitespace-nowrap rounded-lg border border-[rgba(231,237,246,0.16)] px-3 py-1.5 font-mono text-[13px] text-[#e7edf6] sm:justify-self-end">
                {edu.score}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
