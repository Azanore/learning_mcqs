# Dark Theme Testing Instructions

This guide explains how to perform comprehensive testing of the dark theme implementation.

## Quick Start

### 1. Run Automated Tests

```bash
# Run the Node.js validation script
node scripts/validate-dark-theme.js
```

This will check:
- ✓ CSS variables are properly defined
- ✓ Color contrast ratios meet WCAG AA standards
- ✓ All requirements are covered

### 2. Start the Development Server

```bash
npm run dev
```

The application will open in your browser (typically at `http://localhost:5173`).

### 3. Run Browser Visual Tests

1. Open the browser developer console (F12 or Ctrl+Shift+I)
2. Copy the contents of `src/tests/browser-visual-test.js`
3. Paste into the console and press Enter
4. Review the test results

The browser tests will check:
- ✓ All elements exist and are visible
- ✓ Colors are applied correctly
- ✓ Interactive states work properly
- ✓ Accessibility features are present

---

## Manual Testing Checklist

### Page Navigation Tests

Visit each page and verify the dark theme is applied consistently:

1. **Flashcards Page** (`/flashcards`)
   - [ ] Dark background visible
   - [ ] Cards have dark surface with colored tints
   - [ ] Text is clearly readable
   - [ ] Difficulty badges are visible

2. **MCQ Page** (`/mcq`)
   - [ ] Questions have dark backgrounds
   - [ ] Choices are clearly visible
   - [ ] Selected state shows blue tint
   - [ ] Correct/wrong states show green/red tints

3. **Maps Page** (`/maps`)
   - [ ] Table has dark styling
   - [ ] Table rows have hover effects
   - [ ] Map tabs work correctly
   - [ ] Text in table is readable

### Interactive State Tests

Test all interactive elements:

#### Buttons
- [ ] Primary buttons: Hover shows darker blue + shadow
- [ ] Icon buttons: Hover shows lighter background
- [ ] Disabled buttons: Appear dimmed (30% opacity)

#### Navigation
- [ ] Nav links: Hover changes text color
- [ ] Active nav link: Shows blue color + bottom border
- [ ] Navigation is sticky at top

#### Filters
- [ ] Difficulty filter buttons: Hover shows border color change
- [ ] Active filters: Show colored backgrounds (green/orange/red)
- [ ] Dropdown selectors: Hover shows border highlight

#### Cards (Flashcards)
- [ ] Hover on card: Flip icon becomes more visible
- [ ] Click to flip: Smooth transition between front/back
- [ ] Navigation arrows: Hover effect works
- [ ] Navigation arrows: Disabled state when at start/end

#### Choices (MCQ)
- [ ] Hover on choice: Border color changes
- [ ] Click to select: Blue tint appears
- [ ] Correct answer: Green tint and checkmark
- [ ] Wrong answer: Red tint and X icon

### Difficulty Level Tests

Test each difficulty level to ensure proper color coding:

1. **Base (Green)**
   - [ ] Filter button shows green when active
   - [ ] Cards have subtle green tint
   - [ ] Difficulty badge shows green background

2. **Junior (Orange)**
   - [ ] Filter button shows orange when active
   - [ ] Cards have subtle orange tint
   - [ ] Difficulty badge shows orange background

3. **Intermédiaire (Red)**
   - [ ] Filter button shows red when active
   - [ ] Cards have subtle red tint
   - [ ] Difficulty badge shows red background

### Accessibility Tests

#### Keyboard Navigation
1. Press `Tab` to navigate through elements
   - [ ] Focus moves to all interactive elements
   - [ ] Focus order is logical (top to bottom, left to right)
   - [ ] Focus indicator is visible

2. Test keyboard interactions
   - [ ] `Enter` or `Space` activates buttons
   - [ ] `Enter` follows links
   - [ ] Arrow keys work in appropriate contexts

#### Visual Accessibility
- [ ] All text is readable (no low contrast issues)
- [ ] Interactive elements are large enough (minimum 44x44px)
- [ ] Borders and separators are visible
- [ ] Color is not the only indicator of state

#### Screen Reader (Optional)
If you have a screen reader available:
- [ ] All interactive elements have proper labels
- [ ] Status changes are announced
- [ ] Navigation structure is clear

### Responsive Tests

Test on different screen sizes:

1. **Mobile (< 640px)**
   - [ ] Layout adapts to narrow screen
   - [ ] All elements remain accessible
   - [ ] Text remains readable
   - [ ] Touch targets are large enough

2. **Tablet (640px - 1024px)**
   - [ ] Layout uses available space well
   - [ ] All features work correctly

3. **Desktop (> 1024px)**
   - [ ] Content is centered with max-width
   - [ ] Hover states work on all elements
   - [ ] Layout is balanced

### Cross-Browser Tests

Test in multiple browsers if available:

- [ ] **Chrome/Edge** (Chromium-based)
- [ ] **Firefox**
- [ ] **Safari** (if on macOS)

Check for:
- Consistent colors across browsers
- Smooth transitions and animations
- No layout issues

---

## Common Issues to Look For

### Visual Issues
- ❌ Text that's hard to read (low contrast)
- ❌ Borders that are invisible or too faint
- ❌ Colors that don't match the design
- ❌ Inconsistent styling between pages

### Interaction Issues
- ❌ Hover states that don't work
- ❌ Buttons that don't respond to clicks
- ❌ Focus states that are invisible
- ❌ Transitions that are jarring or missing

### Accessibility Issues
- ❌ Elements that can't be reached with keyboard
- ❌ Focus order that doesn't make sense
- ❌ Color as the only indicator of state
- ❌ Text that's too small to read

---

## Reporting Issues

If you find any issues during testing:

1. **Note the issue details:**
   - What page/component is affected?
   - What is the expected behavior?
   - What is the actual behavior?
   - Can you reproduce it consistently?

2. **Take a screenshot** if it's a visual issue

3. **Check the browser console** for any errors

4. **Document the issue** in the test report or create a new issue

---

## Test Results Documentation

After completing all tests, update the checklist in:
- `src/tests/dark-theme-test-checklist.md`

Mark each item as complete and note any issues found.

---

## Additional Resources

- **WCAG Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **Color Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **Keyboard Accessibility:** https://webaim.org/articles/keyboard/

---

## Quick Reference: Keyboard Shortcuts

- `Tab` - Move focus forward
- `Shift + Tab` - Move focus backward
- `Enter` - Activate button/link
- `Space` - Activate button/checkbox
- `F12` - Open developer tools
- `Ctrl + Shift + I` - Open developer tools (alternative)
- `Ctrl + Shift + M` - Toggle device toolbar (responsive testing)

---

**Happy Testing! 🎨**
