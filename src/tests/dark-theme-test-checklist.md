# Dark Theme Testing Checklist

## Automated Tests ✓

### Color Contrast (WCAG AA Standards)
- [x] Primary text on background (#e0f2fe on #0a1628)
- [x] Primary text on surface (#e0f2fe on #0f2744)
- [x] Secondary text on background (#7dd3fc on #0a1628)
- [x] Secondary text on surface (#7dd3fc on #0f2744)
- [x] Primary button text (white on #38bdf8)
- [x] Success indicators (#34d399 on #0a1628)
- [x] Error indicators (#f87171 on #0a1628)
- [x] Warning indicators (#fb923c on #0a1628)
- [x] Difficulty badges (white on colored backgrounds)

### CSS Variables
- [x] --color-bg defined
- [x] --color-surface defined
- [x] --color-border defined
- [x] --color-text defined
- [x] --color-text-secondary defined
- [x] --color-primary defined
- [x] --color-primary-hover defined
- [x] --color-success defined
- [x] --color-error defined
- [x] --color-warning defined

## Manual Visual Testing

### Page Navigation
- [ ] Flashcards page loads with dark theme
- [ ] MCQ page loads with dark theme
- [ ] Maps page loads with dark theme
- [ ] Navigation between pages maintains theme
- [ ] Page transitions are smooth

### Flashcards Page

#### Difficulty Levels
- [ ] Base difficulty: Green tinted background visible
- [ ] Junior difficulty: Orange tinted background visible
- [ ] Intermédiaire difficulty: Red tinted background visible
- [ ] Difficulty badges clearly visible on cards
- [ ] Difficulty filter buttons work correctly

#### Card States
- [ ] Front side: Dark surface with subtle tint
- [ ] Back side: Slightly lighter with more prominent tint
- [ ] Flip animation works smoothly
- [ ] Card content text is readable
- [ ] Difficulty tags are clearly visible

#### Interactive Elements
- [ ] Navigation arrows hover state
- [ ] Navigation arrows disabled state
- [ ] Review button hover state
- [ ] Review button active state
- [ ] Deck selector dropdown styling

### MCQ Page

#### Question Display
- [ ] Question container has appropriate background
- [ ] Question text is clearly readable
- [ ] Difficulty-based tinting visible on questions

#### Choice States
- [ ] Default choice styling
- [ ] Hover state on choices
- [ ] Selected choice (blue tint)
- [ ] Correct answer (green tint)
- [ ] Wrong answer (red tint)
- [ ] Choice icons color correctly

#### Result Display
- [ ] Correct result box (green border/background)
- [ ] Wrong result box (red border/background)
- [ ] Explanation text readable
- [ ] Next question button styling

### Maps Page

#### Table Display
- [ ] Table header background darker than rows
- [ ] Table rows have proper borders
- [ ] Table row hover state
- [ ] Text in table cells readable
- [ ] Table scrolls horizontally if needed

#### Map Selector
- [ ] Map tabs default state
- [ ] Map tabs hover state
- [ ] Active map tab (blue background)
- [ ] Tab text readable in all states

### Global Elements

#### Header
- [ ] Header background color
- [ ] Header text color and readability
- [ ] Header border visible

#### Navigation
- [ ] Nav background matches header
- [ ] Nav links default state
- [ ] Nav links hover state
- [ ] Active nav link (blue with bottom border)
- [ ] Nav icons visible

#### Filters
- [ ] Difficulty filter buttons default state
- [ ] Difficulty filter buttons hover state
- [ ] Active filter buttons (colored backgrounds)
- [ ] Dropdown selectors styling
- [ ] Checkbox labels readable

#### Buttons
- [ ] Primary button default state
- [ ] Primary button hover state (darker + shadow)
- [ ] Primary button disabled state
- [ ] Icon buttons default state
- [ ] Icon buttons hover state
- [ ] Icon buttons disabled state

## Accessibility Checks

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus states visible on all elements
- [ ] Enter/Space activates buttons
- [ ] Arrow keys work in appropriate contexts

### Screen Reader Compatibility
- [ ] All interactive elements have proper labels
- [ ] Color is not the only indicator of state
- [ ] Status messages are announced

### Visual Accessibility
- [ ] Text size is readable (minimum 14px for body)
- [ ] Line height provides adequate spacing
- [ ] Interactive elements have sufficient size (44x44px minimum)
- [ ] Borders and separators are visible

## Cross-Browser Testing
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if available)

## Responsive Testing
- [ ] Mobile view (< 640px)
- [ ] Tablet view (640px - 1024px)
- [ ] Desktop view (> 1024px)

## Performance
- [ ] No layout shifts on page load
- [ ] Smooth transitions and animations
- [ ] No flickering or color flashing
