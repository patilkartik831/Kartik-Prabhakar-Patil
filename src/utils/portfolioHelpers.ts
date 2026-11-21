import {PUBLIC_SHARE_PORTFOLIO_URL} from '../data/portfolio';

/**
 * Resolves the canonical public URL to copy/share on resumes and job applications.
 * Avoids copying localhost or private dev URLs when a public pre URL is known.
 */
export function resolveShareUrl(
  runtimeOrigin?: string,
  fallbackUrl: string = PUBLIC_SHARE_PORTFOLIO_URL,
): string {
  if (!runtimeOrigin) {
    return fallbackUrl;
  }

  const normalized = runtimeOrigin.replace(/\/+$/, '');
  const isLocal =
    normalized.includes('localhost') ||
    normalized.includes('127.0.0.1') ||
    normalized.includes('0.0.0.0');
  const isDevOrigin = normalized.includes('ais-dev-');

  if (isLocal || isDevOrigin) {
    return fallbackUrl;
  }

  return normalized;
}

/**
 * Computes bounded scroll percentage (0 to 100) safely.
 */
export function computeScrollPercent(
  scrollTop: number,
  scrollHeight: number,
  clientHeight: number,
): number {
  const maxScroll = scrollHeight - clientHeight;
  if (maxScroll <= 0) {
    return 0;
  }
  const raw = (scrollTop / maxScroll) * 100;
  return Math.max(0, Math.min(100, Math.round(raw * 100) / 100));
}

/**
 * Cycles a modal/lightbox index with safe wrap-around.
 */
export function cycleIndex(current: number, delta: number, total: number): number {
  if (total <= 0) {
    return -1;
  }
  return (((current + delta) % total) + total) % total;
}
