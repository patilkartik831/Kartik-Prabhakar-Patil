import {SKILL_CATEGORIES} from '../data/portfolio';

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-b border-[rgba(231,237,246,0.08)] py-20"
    >
      <div className="mx-auto max-w-[1040px] px-7">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-[13px] tracking-[0.08em] text-[#8ea0bd]">
              <span className="inline-block h-px w-[18px] bg-gradient-to-r from-[#5eead4] to-[#8b5cf6]" />
              <span>01 — Toolkit</span>
            </div>
            <h2 className="font-display mt-1 text-[clamp(26px,4vw,38px)] font-bold tracking-[-0.01em] text-[#e7edf6]">
              Skills &amp; Stack
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-[rgba(231,237,246,0.08)] bg-[rgba(231,237,246,0.08)] md:grid-cols-2">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.id} className="bg-[#101826] px-6 py-6">
              <h3 className="mb-3.5 font-mono text-xs uppercase tracking-[0.1em] text-[#5eead4]">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-[rgba(231,237,246,0.16)] bg-white/[0.02] px-3 py-1.5 font-mono text-[12.5px] text-[#cdd9ec] transition hover:border-[#5eead4] hover:bg-[rgba(94,234,212,0.12)] hover:text-[#5eead4]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
