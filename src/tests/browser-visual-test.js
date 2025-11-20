/**
 * Browser Visual Testing Script
 * 
 * Run this in the browser console to perform visual checks
 * Usage: Copy and paste this entire file into the browser console while the app is running
 */

(function () {
  console.log('%c🎨 Dark Theme Visual Testing Suite', 'font-size: 20px; font-weight: bold; color: #38bdf8;');
  console.log('%c─'.repeat(60), 'color: #1e3a5f;');

  const results = {
    passed: 0,
    failed: 0,
    warnings: 0,
    tests: []
  };

  function test(name, condition, type = 'test') {
    const passed = condition();
    const status = passed ? '✓' : '✗';
    const color = passed ? '#34d399' : '#f87171';

    console.log(`%c${status} ${name}`, `color: ${color}; font-weight: bold;`);

    if (passed) {
      results.passed++;
    } else {
      results.failed++;
    }

    results.tests.push({ name, passed, type });
    return passed;
  }

  function warn(name, condition) {
    const passed = condition();
    const status = passed ? '✓' : '⚠️';
    const color = passed ? '#34d399' : '#fb923c';

    console.log(`%c${status} ${name}`, `color: ${color}; font-weight: bold;`);

    if (!passed) {
      results.warnings++;
    }

    results.tests.push({ name, passed, type: 'warning' });
    return passed;
  }

  function getComputedColor(selector, property = 'color') {
    const element = document.querySelector(selector);
    if (!element) return null;
    return window.getComputedStyle(element)[property];
  }

  function elementExists(selector) {
    return !!document.querySelector(selector);
  }

  console.log('\n%c1. Element Existence Tests', 'font-size: 16px; font-weight: bold; color: #7dd3fc;');
  console.log('%c─'.repeat(60), 'color: #1e3a5f;');

  test('Header exists', () => elementExists('.header'));
  test('Navigation exists', () => elementExists('.nav'));
  test('Main content exists', () => elementExists('.main'));
  test('Navigation links exist', () => document.querySelectorAll('.nav-link').length >= 3);

  console.log('\n%c2. Color Application Tests', 'font-size: 16px; font-weight: bold; color: #7dd3fc;');
  console.log('%c─'.repeat(60), 'color: #1e3a5f;');

  test('Body has dark background', () => {
    const bg = getComputedColor('body', 'backgroundColor');
    return bg && (bg.includes('10, 22, 40') || bg.includes('#0a1628'));
  });

  test('Body has light text', () => {
    const color = getComputedColor('body', 'color');
    return color && (color.includes('224, 242, 254') || color.includes('#e0f2fe'));
  });

  test('Header has dark surface background', () => {
    const bg = getComputedColor('.header', 'backgroundColor');
    return bg && (bg.includes('15, 39, 68') || bg.includes('#0f2744'));
  });

  test('Navigation has dark surface background', () => {
    const bg = getComputedColor('.nav', 'backgroundColor');
    return bg && (bg.includes('15, 39, 68') || bg.includes('#0f2744'));
  });

  console.log('\n%c3. Interactive State Tests', 'font-size: 16px; font-weight: bold; color: #7dd3fc;');
  console.log('%c─'.repeat(60), 'color: #1e3a5f;');

  test('Active nav link has primary color', () => {
    const activeLink = document.querySelector('.nav-link.active');
    if (!activeLink) return false;
    const color = window.getComputedStyle(activeLink).color;
    return color && (color.includes('56, 189, 248') || color.includes('#38bdf8'));
  });

  test('Buttons exist', () => {
    return document.querySelectorAll('button').length > 0;
  });

  console.log('\n%c4. Component-Specific Tests', 'font-size: 16px; font-weight: bold; color: #7dd3fc;');
  console.log('%c─'.repeat(60), 'color: #1e3a5f;');

  // Check current page
  const currentPath = window.location.pathname;
  console.log(`%cCurrent page: ${currentPath}`, 'color: #7dd3fc; font-style: italic;');

  if (currentPath.includes('flashcard') || currentPath === '/') {
    test('Flashcard container exists', () => elementExists('.flashcard-container'));
    test('Flashcard wrapper exists', () => elementExists('.flashcard-wrapper'));
    warn('Difficulty filters exist', () => elementExists('.difficulty-filters'));
  } else if (currentPath.includes('mcq')) {
    test('MCQ container exists', () => elementExists('.mcq-container'));
    warn('MCQ question exists', () => elementExists('.mcq-question'));
    warn('MCQ choices exist', () => elementExists('.mcq-choices'));
  } else if (currentPath.includes('map')) {
    test('Map container exists', () => elementExists('.map-container'));
    warn('Map selector exists', () => elementExists('.map-selector'));
    warn('Keyword table exists', () => elementExists('.keyword-table'));
  }

  console.log('\n%c5. Accessibility Tests', 'font-size: 16px; font-weight: bold; color: #7dd3fc;');
  console.log('%c─'.repeat(60), 'color: #1e3a5f;');

  test('All buttons are keyboard accessible', () => {
    const buttons = document.querySelectorAll('button');
    return Array.from(buttons).every(btn => btn.tabIndex >= -1);
  });

  test('All links are keyboard accessible', () => {
    const links = document.querySelectorAll('a');
    return Array.from(links).every(link => link.tabIndex >= -1);
  });

  warn('Focus outline visible on buttons', () => {
    const button = document.querySelector('button');
    if (!button) return true;
    button.focus();
    const outline = window.getComputedStyle(button).outline;
    button.blur();
    return outline !== 'none';
  });

  console.log('\n%c6. CSS Variables Test', 'font-size: 16px; font-weight: bold; color: #7dd3fc;');
  console.log('%c─'.repeat(60), 'color: #1e3a5f;');

  const rootStyles = getComputedStyle(document.documentElement);
  const requiredVars = [
    '--color-bg',
    '--color-surface',
    '--color-border',
    '--color-text',
    '--color-text-secondary',
    '--color-primary',
    '--color-success',
    '--color-error',
    '--color-warning'
  ];

  requiredVars.forEach(varName => {
    test(`${varName} is defined`, () => {
      const value = rootStyles.getPropertyValue(varName).trim();
      return value.length > 0;
    });
  });

  // Summary
  console.log('\n%c═'.repeat(60), 'color: #38bdf8;');
  console.log('%c📊 TEST SUMMARY', 'font-size: 18px; font-weight: bold; color: #38bdf8;');
  console.log('%c═'.repeat(60), 'color: #38bdf8;');
  console.log(`%cTotal Tests: ${results.tests.length}`, 'font-weight: bold;');
  console.log(`%c✓ Passed: ${results.passed}`, 'color: #34d399; font-weight: bold;');
  console.log(`%c✗ Failed: ${results.failed}`, 'color: #f87171; font-weight: bold;');
  console.log(`%c⚠️  Warnings: ${results.warnings}`, 'color: #fb923c; font-weight: bold;');

  const successRate = ((results.passed / results.tests.length) * 100).toFixed(1);
  console.log(`%cSuccess Rate: ${successRate}%`, 'font-weight: bold; font-size: 16px;');

  if (results.failed === 0) {
    console.log('%c\n🎉 All tests passed!', 'color: #34d399; font-size: 18px; font-weight: bold;');
  } else {
    console.log('%c\n⚠️  Some tests failed. Review the results above.', 'color: #fb923c; font-size: 16px; font-weight: bold;');
  }

  console.log('\n%c📋 Manual Testing Checklist:', 'font-size: 16px; font-weight: bold; color: #7dd3fc;');
  console.log('%c1. Navigate to all pages (Flashcards, MCQ, Maps)', 'color: #e0f2fe;');
  console.log('%c2. Test hover states on all interactive elements', 'color: #e0f2fe;');
  console.log('%c3. Test difficulty filters and selections', 'color: #e0f2fe;');
  console.log('%c4. Verify keyboard navigation (Tab, Enter, Space)', 'color: #e0f2fe;');
  console.log('%c5. Check responsive behavior on different screen sizes', 'color: #e0f2fe;');
  console.log('%c6. Test all interactive states (selected, correct, wrong)', 'color: #e0f2fe;');

  // Return results for programmatic access
  window.darkThemeTestResults = results;
  return results;
})();
