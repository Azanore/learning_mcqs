/**
 * Dark Theme Visual and Accessibility Validation Script
 * 
 * This script validates the dark theme implementation against WCAG AA standards
 * and verifies visual consistency across all components.
 */

// WCAG AA Contrast Requirements
const WCAG_AA_NORMAL_TEXT = 4.5;
const WCAG_AA_LARGE_TEXT = 3.0;

/**
 * Calculate relative luminance of a color
 * @param {number} r - Red value (0-255)
 * @param {number} g - Green value (0-255)
 * @param {number} b - Blue value (0-255)
 * @returns {number} Relative luminance
 */
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 * @param {string} color1 - First color in hex format
 * @param {string} color2 - Second color in hex format
 * @returns {number} Contrast ratio
 */
function getContrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  const l1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const l2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Convert hex color to RGB
 * @param {string} hex - Hex color code
 * @returns {object} RGB values
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Test color contrast ratios
 */
function testColorContrast() {
  const results = [];

  // Define color pairs to test
  const colorTests = [
    { name: 'Primary text on background', fg: '#e0f2fe', bg: '#0a1628', minRatio: WCAG_AA_NORMAL_TEXT },
    { name: 'Primary text on surface', fg: '#e0f2fe', bg: '#0f2744', minRatio: WCAG_AA_NORMAL_TEXT },
    { name: 'Secondary text on background', fg: '#7dd3fc', bg: '#0a1628', minRatio: WCAG_AA_NORMAL_TEXT },
    { name: 'Secondary text on surface', fg: '#7dd3fc', bg: '#0f2744', minRatio: WCAG_AA_NORMAL_TEXT },
    { name: 'Primary button text', fg: '#ffffff', bg: '#38bdf8', minRatio: WCAG_AA_NORMAL_TEXT },
    { name: 'Success text', fg: '#34d399', bg: '#0a1628', minRatio: WCAG_AA_NORMAL_TEXT },
    { name: 'Error text', fg: '#f87171', bg: '#0a1628', minRatio: WCAG_AA_NORMAL_TEXT },
    { name: 'Warning text', fg: '#fb923c', bg: '#0a1628', minRatio: WCAG_AA_NORMAL_TEXT },
    { name: 'Difficulty base badge', fg: '#ffffff', bg: '#10b981', minRatio: WCAG_AA_NORMAL_TEXT },
    { name: 'Difficulty junior badge', fg: '#ffffff', bg: '#f59e0b', minRatio: WCAG_AA_NORMAL_TEXT },
    { name: 'Difficulty intermédiaire badge', fg: '#ffffff', bg: '#ef4444', minRatio: WCAG_AA_NORMAL_TEXT },
  ];

  colorTests.forEach(test => {
    const ratio = getContrastRatio(test.fg, test.bg);
    const passes = ratio >= test.minRatio;
    results.push({
      test: test.name,
      ratio: ratio.toFixed(2),
      required: test.minRatio,
      passes,
      status: passes ? '✓ PASS' : '✗ FAIL'
    });
  });

  return results;
}

/**
 * Validate CSS variables are properly defined
 */
function validateCSSVariables() {
  const requiredVariables = [
    '--color-bg',
    '--color-surface',
    '--color-border',
    '--color-text',
    '--color-text-secondary',
    '--color-primary',
    '--color-primary-hover',
    '--color-success',
    '--color-error',
    '--color-warning'
  ];

  const results = [];
  const root = document.documentElement;
  const styles = getComputedStyle(root);

  requiredVariables.forEach(varName => {
    const value = styles.getPropertyValue(varName).trim();
    results.push({
      variable: varName,
      value: value || 'NOT DEFINED',
      status: value ? '✓ PASS' : '✗ FAIL'
    });
  });

  return results;
}

/**
 * Check component visibility and styling
 */
function validateComponentStyling() {
  const results = [];

  // Check if key elements exist and are visible
  const checks = [
    { selector: '.header', name: 'Header' },
    { selector: '.nav', name: 'Navigation' },
    { selector: '.nav-link', name: 'Navigation links' },
    { selector: '.main', name: 'Main content area' },
  ];

  checks.forEach(check => {
    const element = document.querySelector(check.selector);
    if (element) {
      const styles = getComputedStyle(element);
      const bgColor = styles.backgroundColor;
      const color = styles.color;
      results.push({
        component: check.name,
        background: bgColor,
        textColor: color,
        status: '✓ FOUND'
      });
    } else {
      results.push({
        component: check.name,
        status: '✗ NOT FOUND'
      });
    }
  });

  return results;
}

/**
 * Generate validation report
 */
function generateReport() {
  console.log('\n=== DARK THEME VALIDATION REPORT ===\n');

  // CSS Variables
  console.log('1. CSS VARIABLES CHECK:');
  console.log('─'.repeat(60));
  const cssVars = validateCSSVariables();
  cssVars.forEach(result => {
    console.log(`${result.status} ${result.variable}: ${result.value}`);
  });

  // Color Contrast
  console.log('\n2. COLOR CONTRAST RATIOS (WCAG AA):');
  console.log('─'.repeat(60));
  const contrastTests = testColorContrast();
  contrastTests.forEach(result => {
    console.log(`${result.status} ${result.test}`);
    console.log(`   Ratio: ${result.ratio}:1 (Required: ${result.required}:1)`);
  });

  // Component Styling
  console.log('\n3. COMPONENT STYLING:');
  console.log('─'.repeat(60));
  const componentTests = validateComponentStyling();
  componentTests.forEach(result => {
    console.log(`${result.status} ${result.component}`);
    if (result.background) {
      console.log(`   Background: ${result.background}`);
      console.log(`   Text Color: ${result.textColor}`);
    }
  });

  // Summary
  const allTests = [...cssVars, ...contrastTests, ...componentTests];
  const passed = allTests.filter(t => t.status.includes('PASS') || t.status.includes('FOUND')).length;
  const total = allTests.length;

  console.log('\n=== SUMMARY ===');
  console.log('─'.repeat(60));
  console.log(`Total Tests: ${total}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${total - passed}`);
  console.log(`Success Rate: ${((passed / total) * 100).toFixed(1)}%`);

  return {
    cssVariables: cssVars,
    contrastTests,
    componentTests,
    summary: { total, passed, failed: total - passed }
  };
}

// Export for use in browser console or testing
if (typeof window !== 'undefined') {
  window.darkThemeValidation = {
    generateReport,
    testColorContrast,
    validateCSSVariables,
    validateComponentStyling,
    getContrastRatio
  };
}

export { generateReport, testColorContrast, validateCSSVariables, validateComponentStyling, getContrastRatio };
