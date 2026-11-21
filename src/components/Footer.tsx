import {Check, Link2} from 'lucide-react';
import {PROFILE} from '../data/portfolio';

interface FooterProps {
  copied: boolean;
  shareUrl: string;
  onCopyLink: () => void;
}

export function Footer({copied, shareUrl, onCopyLink}: FooterProps) {
  return (
    <footer id="contact" className="py-20 pb-14">
      <div className="mx-auto max-w-[1040px] px-7">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="max-w-[520px]">
            <div className="mb-3.5 flex items-center gap-2 font-mono text-[13px] tracking-[0.08em] text-[#8ea0bd]">
              <span className="inline-block h-px w-[18px] bg-gradient-to-r from-[#5eead4] to-[#8b5cf6]" />
              <span>06 — Get in touch</span>
            </div>
            <h2 className="font-display text-[clamp(28px,5vw,46px)] leading-[1.15] font-bold text-[#e7edf6]">
              Let&apos;s build something with <span className="text-[#5eead4]">data</span> &amp;{' '}
              <span className="text-[#5eead4]">AI</span>.
            </h2>
          </div>

          <div className="flex flex-col gap-3.5 font-mono text-sm">
            <a
              href={`mailto:${PROFILE.email}`}
              className="border-b border-[rgba(231,237,246,0.16)] pb-1 text-[#e7edf6] transition hover:border-[#5eead4] hover:text-[#5eead4]"
            >
              {PROFILE.email}
            </a>
            <a
              href={PROFILE.phoneHref}
              className="border-b border-[rgba(231,237,246,0.16)] pb-1 text-[#e7edf6] transition hover:border-[#5eead4] hover:text-[#5eead4]"
            >
              {PROFILE.phoneDisplay}
            </a>
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-[rgba(231,237,246,0.16)] pb-1 text-[#e7edf6] transition hover:border-[#5eead4] hover:text-[#5eead4]"
            >
              {PROFILE.linkedinFullDisplay}
            </a>
            <button
              type="button"
              onClick={onCopyLink}
              title={shareUrl}
              className="inline-flex cursor-pointer items-center gap-2 self-start border-b border-[rgba(94,234,212,0.4)] pb-1 text-left text-[#5eead4] transition hover:border-[#5eead4]"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>Shareable link copied!</span>
                </>
              ) : (
                <>
                  <Link2 className="h-4 w-4" />
                  <span>Copy shareable portfolio link</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap justify-between gap-3 border-t border-[rgba(231,237,246,0.08)] pt-6 font-mono text-xs text-[#8ea0bd]">
          <div>© 2026 {PROFILE.name}</div>
          <div>
            {PROFILE.roleSummary} · {PROFILE.location}
          </div>
        </div>
      </div>
    </footer>
  );
}
