import {Check, Link2, Menu, X} from 'lucide-react';
import {useState} from 'react';
import {NAV_LINKS, PROFILE} from '../data/portfolio';

interface NavbarProps {
  copied: boolean;
  onCopyLink: () => void;
}

export function Navbar({copied, onCopyLink}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 border-b border-[rgba(231,237,246,0.08)] bg-[#0a0f1a]/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-[1040px] items-center justify-between gap-4 px-7 py-4">
        <a
          href="#top"
          className="font-display flex items-baseline text-lg font-bold tracking-[0.02em] text-[#e7edf6] transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5eead4]"
        >
          <span>{PROFILE.brandLeft}</span>
          <span className="text-[#5eead4]">.</span>
          <span>{PROFILE.brandRight}</span>
        </a>

        <div className="hidden items-center gap-6 font-mono text-[12.5px] tracking-[0.04em] md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative pb-1 uppercase text-[#8ea0bd] transition-colors hover:text-[#5eead4] focus-visible:text-[#5eead4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5eead4]"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#5eead4] to-[#8b5cf6] transition-all duration-200 group-hover:w-full group-focus-visible:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onCopyLink}
            aria-label="Copy shareable portfolio link"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-[rgba(231,237,246,0.16)] bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-[#e7edf6] transition hover:border-[#5eead4] hover:bg-[rgba(94,234,212,0.12)] hover:text-[#5eead4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5eead4]"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-[#5eead4]" />
                <span className="text-[#5eead4]">Copied</span>
              </>
            ) : (
              <>
                <Link2 className="h-3.5 w-3.5 text-[#5eead4]" />
                <span>Copy Link</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex cursor-pointer items-center justify-center rounded-md border border-[rgba(231,237,246,0.16)] bg-white/[0.03] p-1.5 text-[#e7edf6] transition hover:border-[#5eead4] hover:text-[#5eead4] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="border-t border-[rgba(231,237,246,0.08)] bg-[#0d1424]/95 px-7 py-4 md:hidden"
        >
          <div className="grid grid-cols-2 gap-3 font-mono text-xs uppercase tracking-[0.06em]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg border border-[rgba(231,237,246,0.08)] bg-[#101826] px-3.5 py-2.5 text-[#cdd9ec] transition hover:border-[#5eead4] hover:text-[#5eead4]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
