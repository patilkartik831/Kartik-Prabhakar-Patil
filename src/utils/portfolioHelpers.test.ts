import assert from 'node:assert/strict';
import test from 'node:test';
import {
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCES,
  NAV_LINKS,
  PROJECTS,
  PUBLIC_SHARE_PORTFOLIO_URL,
  SKILL_CATEGORIES,
  STATS,
} from '../data/portfolio.ts';
import {computeScrollPercent, cycleIndex, resolveShareUrl} from './portfolioHelpers.ts';

test('resolveShareUrl prefers public pre/custom domain and replaces localhost/dev origins', () => {
  assert.equal(resolveShareUrl('http://localhost:3000'), PUBLIC_SHARE_PORTFOLIO_URL);
  assert.equal(
    resolveShareUrl('https://ais-dev-himwb4wdzt7xwhitppqs57-365741469039.asia-southeast1.run.app/'),
    PUBLIC_SHARE_PORTFOLIO_URL,
  );
  assert.equal(
    resolveShareUrl('https://ais-pre-himwb4wdzt7xwhitppqs57-365741469039.asia-southeast1.run.app/'),
    'https://ais-pre-himwb4wdzt7xwhitppqs57-365741469039.asia-southeast1.run.app',
  );
  assert.equal(resolveShareUrl('https://kartikpatil.dev/'), 'https://kartikpatil.dev');
});

test('computeScrollPercent clamps between 0 and 100 and handles non-scrollable pages', () => {
  assert.equal(computeScrollPercent(0, 1000, 1000), 0);
  assert.equal(computeScrollPercent(0, 800, 1000), 0);
  assert.equal(computeScrollPercent(500, 2000, 1000), 50);
  assert.equal(computeScrollPercent(1500, 2000, 1000), 100);
  assert.equal(computeScrollPercent(-20, 2000, 1000), 0);
});

test('cycleIndex wraps forward and backward across certificate gallery', () => {
  assert.equal(cycleIndex(0, -1, 8), 7);
  assert.equal(cycleIndex(7, 1, 8), 0);
  assert.equal(cycleIndex(3, 1, 8), 4);
  assert.equal(cycleIndex(0, 1, 0), -1);
});

test('portfolio dataset integrity matches expected counts and valid image paths', () => {
  assert.equal(PROJECTS.length, 4);
  assert.equal(CERTIFICATIONS.length, 8);
  assert.equal(SKILL_CATEGORIES.length, 6);
  assert.equal(EXPERIENCES.length, 1);
  assert.equal(EDUCATION.length, 3);
  assert.equal(STATS.length, 4);
  assert.equal(NAV_LINKS.length, 7);

  for (const cert of CERTIFICATIONS) {
    assert.ok(cert.imageSrc.startsWith('/certificates/cert-'));
    assert.ok(cert.name.length > 0);
    assert.ok(cert.issuer.length > 0);
  }
});
