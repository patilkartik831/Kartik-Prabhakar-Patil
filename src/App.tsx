/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {ArrowUp} from 'lucide-react';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {CertificateLightbox} from './components/CertificateLightbox';
import {CertificationsSection} from './components/CertificationsSection';
import {EducationSection} from './components/EducationSection';
import {ExperienceSection} from './components/ExperienceSection';
import {Footer} from './components/Footer';
import {Hero} from './components/Hero';
import {Navbar} from './components/Navbar';
import {ProjectsSection} from './components/ProjectsSection';
import {SkillsSection} from './components/SkillsSection';
import {CERTIFICATIONS} from './data/portfolio';
import {computeScrollPercent, cycleIndex, resolveShareUrl} from './utils/portfolioHelpers';

export default function App() {
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [copied, setCopied] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const copyTimerRef = useRef<number | undefined>(undefined);

  const shareUrl = useMemo(() => {
    if (typeof window === 'undefined') {
      return resolveShareUrl();
    }
    return resolveShareUrl(window.location.origin);
  }, []);

  useEffect(() => {
    const updateScroll = () => {
      const root = document.documentElement;
      const percent = computeScrollPercent(
        root.scrollTop,
        root.scrollHeight,
        root.clientHeight,
      );
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${percent / 100})`;
      }
      setShowBackToTop(root.scrollTop > 480);
    };

    window.addEventListener('scroll', updateScroll, {passive: true});
    updateScroll();
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current !== undefined) {
        window.clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      textArea.setAttribute('readonly', 'true');
      textArea.className = 'fixed -left-[9999px] opacity-0';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }

    setCopied(true);
    if (copyTimerRef.current !== undefined) {
      window.clearTimeout(copyTimerRef.current);
    }
    copyTimerRef.current = window.setTimeout(() => setCopied(false), 2400);
  }, [shareUrl]);

  const handleCloseLightbox = useCallback(() => {
    setSelectedCertIndex(null);
  }, []);

  const handlePrevCert = useCallback(() => {
    setSelectedCertIndex((prev) =>
      prev === null ? null : cycleIndex(prev, -1, CERTIFICATIONS.length),
    );
  }, []);

  const handleNextCert = useCallback(() => {
    setSelectedCertIndex((prev) =>
      prev === null ? null : cycleIndex(prev, 1, CERTIFICATIONS.length),
    );
  }, []);

  const activeCertificate =
    selectedCertIndex !== null ? CERTIFICATIONS[selectedCertIndex] : null;

  return (
    <div id="top" className="relative min-h-screen bg-[#0a0f1a] text-[#e7edf6]">
      <div
        ref={progressRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[1000] h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#5eead4] to-[#8b5cf6] shadow-[0_0_12px_rgba(94,234,212,0.6)] transition-transform duration-100 ease-out"
      />

      <div aria-hidden="true" className="bg-grid-pattern pointer-events-none fixed inset-0 z-0" />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-[180px] -left-[160px] h-[520px] w-[520px] rounded-full bg-[#5eead4] opacity-15 blur-[80px]" />
        <div className="absolute top-[40%] -right-[200px] h-[460px] w-[460px] rounded-full bg-[#8b5cf6] opacity-15 blur-[80px]" />
        <div className="absolute -bottom-[160px] left-[30%] h-[380px] w-[380px] rounded-full bg-[#f2b84b] opacity-[0.08] blur-[80px]" />
      </div>

      <div className="relative z-10">
        <Navbar copied={copied} onCopyLink={handleCopyLink} />

        <main>
          <Hero />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <CertificationsSection onSelectCertificate={setSelectedCertIndex} />
        </main>

        <Footer copied={copied} shareUrl={shareUrl} onCopyLink={handleCopyLink} />
      </div>

      <CertificateLightbox
        certificate={activeCertificate}
        currentIndex={selectedCertIndex ?? 0}
        totalCount={CERTIFICATIONS.length}
        onClose={handleCloseLightbox}
        onPrev={handlePrevCert}
        onNext={handleNextCert}
      />

      <a
        href="#top"
        aria-label="Back to top"
        className={`fixed right-7 bottom-7 z-[200] flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(231,237,246,0.16)] bg-[#101826] text-[#e7edf6] transition duration-300 hover:-translate-y-0.5 hover:border-[#5eead4] hover:shadow-[0_10px_28px_-14px_rgba(94,234,212,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5eead4] ${
          showBackToTop
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <ArrowUp className="h-4 w-4" />
      </a>
    </div>
  );
}
