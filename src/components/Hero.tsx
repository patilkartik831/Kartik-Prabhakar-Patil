import {ExternalLink, GraduationCap, Mail, Phone} from 'lucide-react';
import {useEffect, useState} from 'react';
import {PROFILE, STATS} from '../data/portfolio';

function AnimatedCounter({target}: {target: number}) {
  const [value, setValue] = useState<number>(target);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setValue(target);
      return;
    }

    let rafId = 0;
    let start: number | null = null;
    const duration = 850;
    setValue(0);

    const step = (now: number) => {
      if (start === null) {
        start = now;
      }
      const progress = Math.max(0, Math.min((now - start) / duration, 1));
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target]);

  return <span>{value}</span>;
}

export function Hero() {
  const [roleText, setRoleText] = useState<string>(PROFILE.roles[0]);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setRoleText(PROFILE.roles[0]);
      return;
    }

    let roleIndex = 0;
    let charIndex = PROFILE.roles[0].length;
    let deleting = true;
    let timerId: number | undefined;

    const tick = () => {
      const current = PROFILE.roles[roleIndex];
      if (!deleting) {
        charIndex += 1;
        setRoleText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timerId = window.setTimeout(tick, 1800);
          return;
        }
        timerId = window.setTimeout(tick, 55);
      } else {
        charIndex -= 1;
        setRoleText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % PROFILE.roles.length;
          timerId = window.setTimeout(tick, 300);
          return;
        }
        timerId = window.setTimeout(tick, 28);
      }
    };

    setRoleText(PROFILE.roles[0]);
    timerId = window.setTimeout(tick, 1800);
    return () => {
      if (timerId !== undefined) {
        window.clearTimeout(timerId);
      }
    };
  }, []);

  return (
    <header
      id="about"
      className="relative overflow-hidden border-b border-[rgba(231,237,246,0.08)] pt-20 pb-16 sm:pt-24"
    >
      <div
        aria-hidden="true"
        className="animate-drift-glow pointer-events-none absolute -top-[220px] left-1/2 z-0 h-[780px] w-[780px] -translate-x-1/2 blur-[10px] bg-[radial-gradient(circle_at_30%_30%,rgba(94,234,212,0.16),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.14),transparent_55%)]"
      />

      <div className="relative z-10 mx-auto max-w-[1040px] px-7">
        <div className="mb-5 flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.18em] text-[#5eead4]">
          <span className="animate-pulse-dot inline-block h-[9px] w-[9px] rounded-full bg-[#5eead4]" />
          <span>{PROFILE.eyebrow}</span>
        </div>

        <h1 className="animate-title-shine font-display mb-3.5 bg-gradient-to-r from-[#e7edf6] via-[#5eead4] to-[#8b5cf6] bg-clip-text text-[clamp(40px,7vw,72px)] leading-[1.05] font-bold tracking-[-0.01em] text-transparent">
          {PROFILE.name}
          <span className="bg-gradient-to-r from-[#5eead4] to-[#8b5cf6] bg-clip-text text-transparent">
            .
          </span>
        </h1>

        <div className="mb-7 min-h-[28px] font-mono text-[clamp(14px,2.2vw,18px)] text-[#8ea0bd]">
          <span>{roleText}</span>
          <span
            aria-hidden="true"
            className="animate-blink-cursor ml-0.5 inline-block h-[1.1em] w-[2px] align-middle bg-[#5eead4]"
          />
        </div>

        <p className="mb-9 max-w-[640px] text-base leading-[1.65] text-[#c4d0e2]">
          {PROFILE.summary}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#5eead4] via-[#8defd4] to-[#8b5cf6] px-4 py-2.5 font-mono text-[13px] font-semibold text-[#06231d] shadow-[0_8px_24px_-12px_rgba(94,234,212,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-10px_rgba(139,92,246,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5eead4]"
          >
            <Mail className="h-4 w-4" />
            <span>{PROFILE.email}</span>
          </a>

          <a
            href={PROFILE.phoneHref}
            className="inline-flex items-center gap-2 rounded-lg border border-[rgba(231,237,246,0.16)] px-4 py-2.5 font-mono text-[13px] text-[#e7edf6] transition hover:-translate-y-0.5 hover:border-[#5eead4] hover:bg-[rgba(94,234,212,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5eead4]"
          >
            <Phone className="h-4 w-4 text-[#5eead4]" />
            <span>{PROFILE.phoneDisplay}</span>
          </a>

          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[rgba(231,237,246,0.16)] px-4 py-2.5 font-mono text-[13px] text-[#e7edf6] transition hover:-translate-y-0.5 hover:border-[#5eead4] hover:bg-[rgba(94,234,212,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5eead4]"
          >
            <ExternalLink className="h-4 w-4 text-[#5eead4]" />
            <span>{PROFILE.linkedinDisplay}</span>
          </a>

          <a
            href="#certifications"
            className="inline-flex items-center gap-2 rounded-lg border border-[rgba(231,237,246,0.16)] px-4 py-2.5 font-mono text-[13px] text-[#e7edf6] transition hover:-translate-y-0.5 hover:border-[#5eead4] hover:bg-[rgba(94,234,212,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5eead4]"
          >
            <GraduationCap className="h-4 w-4 text-[#5eead4]" />
            <span>View Certificates</span>
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 overflow-hidden rounded-[14px] border border-[rgba(231,237,246,0.08)] md:grid-cols-4">
          {STATS.map((stat, idx) => (
            <a
              key={stat.id}
              href={stat.href}
              className={`group relative block overflow-hidden border-[rgba(231,237,246,0.08)] px-5 py-5.5 text-inherit transition hover:-translate-y-0.5 ${
                idx < 2 ? 'border-b md:border-b-0' : ''
              } ${idx % 2 === 0 ? 'border-r' : 'md:border-r'} ${
                idx === STATS.length - 1 ? 'md:border-r-0' : ''
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-[rgba(94,234,212,0.12)] to-[rgba(139,92,246,0.10)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="font-display relative z-10 text-[clamp(22px,3.4vw,32px)] font-bold text-[#e7edf6] group-hover:bg-gradient-to-r group-hover:from-[#5eead4] group-hover:to-[#8b5cf6] group-hover:bg-clip-text group-hover:text-transparent">
                <AnimatedCounter target={stat.target} />
                {stat.suffix && <span className="text-[#5eead4]">{stat.suffix}</span>}
              </div>
              <div className="relative z-10 mt-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-[#8ea0bd] transition-colors group-hover:text-[#5eead4]">
                {stat.label}
              </div>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
