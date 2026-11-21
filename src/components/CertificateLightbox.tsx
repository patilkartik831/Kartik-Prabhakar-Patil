import {ChevronLeft, ChevronRight, X} from 'lucide-react';
import {useEffect} from 'react';
import type {CertificationItem} from '../data/portfolio';

interface CertificateLightboxProps {
  certificate: CertificationItem | null;
  currentIndex: number;
  totalCount: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function CertificateLightbox({
  certificate,
  currentIndex,
  totalCount,
  onClose,
  onPrev,
  onNext,
}: CertificateLightboxProps) {
  useEffect(() => {
    if (!certificate) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        onPrev();
      } else if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose, onPrev, onNext]);

  if (!certificate) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={certificate.caption}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-[300] flex flex-col items-center justify-center gap-4 bg-[#060a12]/92 p-6 backdrop-blur-sm sm:p-8"
    >
      <div className="flex w-full max-w-[900px] items-center justify-between gap-4">
        <span className="font-mono text-xs text-[#8ea0bd]">
          {currentIndex + 1} / {totalCount}
        </span>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close certificate preview"
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[rgba(231,237,246,0.16)] bg-white/[0.04] px-4 py-2 font-mono text-[13px] text-[#e7edf6] transition hover:border-[#5eead4] hover:text-[#5eead4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5eead4]"
        >
          <X className="h-4 w-4" />
          <span>Close</span>
        </button>
      </div>

      <div className="relative flex max-w-[92vw] items-center justify-center gap-3">
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous certificate"
          className="hidden cursor-pointer items-center justify-center rounded-lg border border-[rgba(231,237,246,0.16)] bg-[#101826]/90 p-2.5 text-[#e7edf6] transition hover:border-[#5eead4] hover:text-[#5eead4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5eead4] sm:inline-flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <img
          src={certificate.imageSrc}
          alt={certificate.name}
          className="max-h-[75vh] max-w-[min(840px,88vw)] rounded-[10px] border border-[rgba(231,237,246,0.16)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]"
        />

        <button
          type="button"
          onClick={onNext}
          aria-label="Next certificate"
          className="hidden cursor-pointer items-center justify-center rounded-lg border border-[rgba(231,237,246,0.16)] bg-[#101826]/90 p-2.5 text-[#e7edf6] transition hover:border-[#5eead4] hover:text-[#5eead4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5eead4] sm:inline-flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="flex flex-col items-center gap-2 text-center">
        <p className="max-w-[700px] font-mono text-[13px] text-[#cdd9ec]">
          {certificate.caption}
        </p>
        <div className="flex items-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous certificate"
            className="inline-flex cursor-pointer items-center gap-1 rounded-md border border-[rgba(231,237,246,0.16)] bg-[#101826] px-3 py-1.5 font-mono text-xs text-[#e7edf6]"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Prev</span>
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next certificate"
            className="inline-flex cursor-pointer items-center gap-1 rounded-md border border-[rgba(231,237,246,0.16)] bg-[#101826] px-3 py-1.5 font-mono text-xs text-[#e7edf6]"
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
