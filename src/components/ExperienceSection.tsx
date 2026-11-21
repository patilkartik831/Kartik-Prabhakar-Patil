import {EXPERIENCES} from '../data/portfolio';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-b border-[rgba(231,237,246,0.08)] py-20"
    >
      <div className="mx-auto max-w-[1040px] px-7">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-[13px] tracking-[0.08em] text-[#8ea0bd]">
              <span className="inline-block h-px w-[18px] bg-gradient-to-r from-[#5eead4] to-[#8b5cf6]" />
              <span>02 — Experience</span>
            </div>
            <h2 className="font-display mt-1 text-[clamp(26px,4vw,38px)] font-bold tracking-[-0.01em] text-[#e7edf6]">
              Work History
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          {EXPERIENCES.map((exp) => (
            <article
              key={exp.id}
              className="rounded-[14px] border border-[rgba(231,237,246,0.08)] bg-gradient-to-b from-[#101826] to-[#101826]/40 p-7 sm:p-8"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-[22px] font-semibold text-[#e7edf6]">
                    {exp.role}
                  </h3>
                  <div className="mt-1.5 font-mono text-[13px] text-[#5eead4]">
                    {exp.organization}
                  </div>
                </div>
                <div className="font-mono text-xs text-[#8ea0bd] sm:text-right">
                  <div>{exp.period}</div>
                  <div className="mt-0.5">{exp.duration}</div>
                </div>
              </div>

              <ul className="flex flex-col gap-2.5 text-[15px] text-[#c4d0e2]">
                {exp.highlights.map((item) => (
                  <li key={item} className="relative pl-5">
                    <span
                      aria-hidden="true"
                      className="absolute left-0 font-mono text-[#5eead4]"
                    >
                      ›
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-[rgba(231,237,246,0.16)] bg-white/[0.02] px-3 py-1.5 font-mono text-[12.5px] text-[#cdd9ec] transition hover:border-[#5eead4] hover:bg-[rgba(94,234,212,0.12)] hover:text-[#5eead4]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
