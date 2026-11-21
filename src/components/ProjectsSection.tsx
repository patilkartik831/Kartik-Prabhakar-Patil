import {PROJECTS} from '../data/portfolio';

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-b border-[rgba(231,237,246,0.08)] py-20"
    >
      <div className="mx-auto max-w-[1040px] px-7">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-[13px] tracking-[0.08em] text-[#8ea0bd]">
              <span className="inline-block h-px w-[18px] bg-gradient-to-r from-[#5eead4] to-[#8b5cf6]" />
              <span>03 — Selected Work</span>
            </div>
            <h2 className="font-display mt-1 text-[clamp(26px,4vw,38px)] font-bold tracking-[-0.01em] text-[#e7edf6]">
              Projects
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-[14px] border border-[rgba(231,237,246,0.08)] bg-[#101826] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(231,237,246,0.16)] hover:shadow-[0_18px_40px_-28px_rgba(94,234,212,0.3),0_18px_40px_-28px_rgba(139,92,246,0.2)]"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 px-7 pt-6">
                <div>
                  <h3 className="font-display text-[21px] font-semibold text-[#e7edf6]">
                    {project.name}
                  </h3>
                  <div className="mt-1.5 font-mono text-xs uppercase tracking-[0.06em] text-[#5eead4]">
                    {project.tagline}
                  </div>
                </div>
                <span className="whitespace-nowrap rounded-md border border-[rgba(231,237,246,0.16)] px-3 py-1 font-mono text-xs text-[#8ea0bd]">
                  {project.period}
                </span>
              </div>

              <div className="px-7 pt-4">
                <p className="text-[15px] text-[#c4d0e2]">{project.summary}</p>
              </div>

              <div className="mx-7 mt-5 overflow-hidden rounded-[10px] border border-[rgba(231,237,246,0.08)]">
                {project.meta.map((row, rowIdx) => (
                  <div
                    key={row.key}
                    className={`grid grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr] ${
                      rowIdx > 0 ? 'border-t border-[rgba(231,237,246,0.08)]' : ''
                    }`}
                  >
                    <div className="border-r border-[rgba(231,237,246,0.08)] bg-white/[0.015] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.08em] text-[#8ea0bd]">
                      {row.key}
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 px-4 py-3 text-[13.5px] text-[#e7edf6]">
                      {row.value && <span>{row.value}</span>}
                      {row.tags &&
                        row.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-[rgba(231,237,246,0.16)] bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-[#cdd9ec] transition hover:border-[#5eead4] hover:bg-[rgba(94,234,212,0.12)] hover:text-[#5eead4]"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-7 pt-4 pb-7">
                <ul className="flex flex-col gap-2 text-[14.5px] text-[#c4d0e2]">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="relative pl-5">
                      <span
                        aria-hidden="true"
                        className="absolute left-0 text-[#8ea0bd]"
                      >
                        —
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
