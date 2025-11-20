# Dark Theme Design Document

## Overview

The dark theme implementation will leverage CSS custom properties (CSS variables) already defined in the application's `:root` selector. By updating these variables with dark-appropriate values, we can transform the entire application's appearance while maintaining the existing component structure and behavior.

## Architecture

### Approach

The implementation uses a CSS variable override strategy:
- All existing color variables in `:root` will be redefined with dark theme values
- No changes to component structure or JavaScript logic required
- The dark theme will be the default and only theme (replacing the current light theme)

### Color Philosophy

The dark theme follows these principles:
- **Background hierarchy**: Use dark blue/cyan tones to create depth (deep blue for main background, slightly lighter blue-cyan for surfaces)
- **Text contrast**: Ensure sufficient contrast with light text on dark backgrounds (WCAG AA compliance)
- **Color preservation**: Maintain brand colors (primary blue, success green, error red, warning orange) with slight adjustments for better visibility on dark backgrounds
- **Difficulty colors**: Keep the existing difficulty level colors but adjust opacity/brightness for dark backgrounds
- **Avoid pure black/gray**: Use rich dark blues and cyan tones instead of neutral grays for a more vibrant, modern appearance

## Components and Interfaces

### CSS Variable Mapping

The following CSS variables will be updated in `src/App.css`:

```css
:root {
  /* Backgrounds - dark blue/cyan palette */
  --color-bg: #0a1628;           /* Main app background - deep navy blue */
  --color-surface: #0f2744;      /* Card/surface background - dark blue */
  
  /* Borders */
  --color-border: #1e3a5f;       /* Border color - medium dark blue */
  
  /* Text */
  --color-text: #e0f2fe;         /* Primary text - light cyan/blue */
  --color-text-secondary: #7dd3fc; /* Secondary text - bright cyan */
  
  /* Brand colors - adjusted for dark theme */
  --color-primary: #38bdf8;      /* Primary cyan - bright and vibrant */
  --color-primary-hover: #0ea5e9; /* Primary hover state - deeper cyan */
  --color-success: #34d399;      /* Success green - emerald tone */
  --color-error: #f87171;        /* Error red - brighter */
  --color-warning: #fb923c;      /* Warning orange - brighter */
}
```

### Component-Specific Adjustments

#### 1. Flashcards
- **Front side**: Dark surface with subtle colored tint based on difficulty
- **Back side**: Slightly lighter surface with more prominent colored tint
- **Difficulty badges**: Maintain vibrant colors with adjusted opacity for visibility

#### 2. MCQ Questions
- **Question container**: Dark surface with difficulty-based tinted background
- **Choices**: Dark surface with lighter hover state
- **Selected state**: Blue tint on dark background
- **Correct/Wrong states**: Green/red tints with appropriate contrast

#### 3. Navigation
- **Background**: Dark surface matching header
- **Active state**: Primary blue with bottom border
- **Hover state**: Subtle text color change

#### 4. Buttons and Interactive Elements
- **Primary buttons**: Bright blue with darker hover state
- **Icon buttons**: Dark surface with border, lighter on hover
- **Difficulty filters**: Maintain colored backgrounds when active

#### 5. Tables (Maps Page)
- **Header**: Darker background than rows
- **Rows**: Dark surface with subtle borders
- **Hover state**: Slightly lighter background

## Data Models

No data model changes required. This is a pure CSS/styling update.

## Error Handling

No error handling changes required. The implementation is declarative CSS that will gracefully apply to all existing components.

### Potential Issues

1. **Contrast issues**: If any text becomes hard to read, adjust the specific color variable
2. **Color visibility**: Some colored elements may need brightness adjustments
3. **Border visibility**: Borders may need to be slightly lighter to remain visible

## Testing Strategy

### Visual Testing
1. Navigate through all three pages (Flashcards, MCQ, Maps)
2. Test all difficulty levels (base, junior, intermédiaire)
3. Verify all interactive states:
   - Button hovers
   - Card selections
   - Navigation active states
   - Difficulty filter selections
4. Check text readability across all components
5. Verify colored elements (difficulty badges, correct/wrong indicators) are clearly visible

### Accessibility Testing
1. Verify color contrast ratios meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
2. Ensure all interactive elements have visible focus states
3. Check that color is not the only means of conveying information

### Cross-Component Testing
1. Verify consistency across all pages
2. Check that all card types maintain visual distinction
3. Ensure difficulty color coding works across flashcards and MCQs
