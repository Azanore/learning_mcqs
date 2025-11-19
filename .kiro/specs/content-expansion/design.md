# Design Document

## Overview

This design outlines the content expansion strategy for the Junior Dev QCM revision application. The expansion adds 16 new technology topics with comprehensive flashcards, MCQs, and keyword comparison maps. The design prioritizes QCM-optimized content focusing on pattern recognition, keyword association, and high-frequency concepts that appear in junior-level technical assessments.

The content follows a three-tier classification system (Heavy, Medium, Grouped) with specific volume targets and difficulty distributions. All content is written in French and follows consistent data structures to integrate seamlessly with the existing application architecture.

## Architecture

### Content Organization

```
src/data/
├── flashcards/
│   ├── index.js (aggregates all flashcard arrays)
│   ├── [existing files: react.js, javascript.js, docker.js, git.js, databases.js, backend.js, devops.js]
│   └── [16 new files]
├── mcqs/
│   ├── index.js (aggregates all MCQ arrays)
│   ├── [existing files: react.js, javascript.js, docker.js, git.js, databases.js, backend.js, devops.js]
│   └── [16 new files]
└── keywordMaps.js (comparison tables)
```

### Technology Classification

**Heavy Topics** (40-50 flashcards, 30-40 MCQs each):
- React
- JavaScript
- HTML
- CSS
- Bootstrap
- PHP
- Laravel
- Node.js/Express
- MySQL
- MongoDB

**Medium Topics** (30-35 flashcards, 20-22 MCQs each):
- Docker
- Git
- Java/JEE
- Spring/Hibernate
- Angular
- jQuery

**Grouped Topics** (35-40 flashcards, 22-25 MCQs total):
- Mobile (Android/Kotlin, iOS/Swift, React Native, Flutter/Dart)
- DevOps-tools (Kubernetes, Jenkins, SonarQube, RabbitMQ)
- Security-Networking (Cybersecurity + Networking fundamentals)
- Fundamentals (Computer Science, Systems, Logic, IT concepts)

## Components and Interfaces

### Flashcard Data Structure

```javascript
{
  id: String,              // Composite ID: "{deck}-{number}" (e.g., "react-1", "html-15")
  deck: String,            // Technology name (e.g., "React", "HTML", "Mobile")
  difficulty: String,      // "Base", "Junior", or "Intermédiaire"
  front: String,           // Question text in French
  back: String,            // Answer text in French
  needsReview: Boolean     // Default false
}
```

**ID Format:** `{deck}-{sequentialNumber}`
- Each file manages its own sequential numbering starting from 1
- Example: `react-1`, `react-2`, ..., `html-1`, `html-2`, ...
- Enables easy expansion without cross-file ID coordination

### MCQ Data Structure

```javascript
{
  id: String,              // Composite ID: "{topic}-{number}" (e.g., "react-1", "html-15")
  topic: String,           // Technology name (e.g., "React", "HTML", "Mobile")
  difficulty: String,      // "Base", "Junior", or "Intermédiaire"
  question: String,        // Question text in French
  choices: Array<String>,  // 4 answer options
  correctAnswers: Array<Number>, // Zero-based indices of correct choices
  explanation: String,     // Explanation in French (why correct + why others wrong)
  multiSelect: Boolean     // true if multiple correct answers, false otherwise
}
```

**ID Format:** `{topic}-{sequentialNumber}`
- Each file manages its own sequential numbering starting from 1
- Example: `react-1`, `react-2`, ..., `html-1`, `html-2`, ...
- Enables easy expansion without cross-file ID coordination

### Keyword Map Data Structure

```javascript
{
  id: Number,              // Unique sequential ID
  title: String,           // Comparison title (e.g., "React vs Angular")
  type: "table",           // Always "table"
  data: {
    headers: Array<String>,  // Column headers
    rows: Array<Array<String>> // Comparison rows
  }
}
```

## Data Models

### Content Volume Targets

| Classification | Technologies | Flashcards | MCQs | Total Items |
|---------------|--------------|------------|------|-------------|
| Heavy (10)    | React, JS, HTML, CSS, Bootstrap, PHP, Laravel, Node/Express, MySQL, MongoDB | 40-50 each | 30-40 each | 700-900 |
| Medium (6)    | Docker, Git, Java/JEE, Spring/Hibernate, Angular, jQuery | 30-35 each | 20-22 each | 300-342 |
| Grouped (4)   | Mobile, DevOps-tools, Security-Networking, Fundamentals | 35-40 each | 22-25 each | 228-260 |
| **Total**     | **20 topics** | **~1,228-1,502** | **~828-1,002** | **~2,056-2,504** |

### Difficulty Distribution

**Heavy & Medium Topics:**
- Base: 50%
- Junior: 35%
- Intermédiaire: 15%

**Grouped Topics:**
- Base: 55%
- Junior: 30%
- Intermédiaire: 15%

### Grouped Topic Sub-Distribution

**Mobile.js** (35-40 flashcards, 22-25 MCQs):
- Android/Kotlin: 9-10 flashcards, 5-6 MCQs
- iOS/Swift: 9-10 flashcards, 5-6 MCQs
- React Native: 9-10 flashcards, 6-7 MCQs
- Flutter/Dart: 8-10 flashcards, 6-7 MCQs

**DevOps-tools.js** (35-40 flashcards, 22-25 MCQs):
- Kubernetes: 10-12 flashcards, 7-8 MCQs
- Jenkins: 8-10 flashcards, 5-6 MCQs
- SonarQube: 8-9 flashcards, 5-6 MCQs
- RabbitMQ: 9-10 flashcards, 5-6 MCQs

**Security-Networking.js** (35-40 flashcards, 22-25 MCQs):
- Cybersecurity: 18-20 flashcards, 11-13 MCQs
- Networking: 17-20 flashcards, 11-12 MCQs

**Fundamentals.js** (35-40 flashcards, 22-25 MCQs):
- Computer Science: 10-12 flashcards, 6-7 MCQs
- Systems: 9-10 flashcards, 5-6 MCQs
- Logic: 8-10 flashcards, 5-6 MCQs
- IT Concepts: 8-10 flashcards, 6-7 MCQs

## Content Strategy

### QCM-Optimized Content Types

1. **Keyword-Trigger Associations**
   - Flashcards that map specific keywords to technologies
   - Example: "Orchestration" → Kubernetes, "Message Broker" → RabbitMQ
   - Enables instant recognition in QCM questions

2. **Comparative Syntax Questions**
   - Side-by-side syntax differences between similar technologies
   - Example: React `{value}` vs Angular `{{value}}`
   - Helps eliminate wrong answers by spotting syntax mismatches

3. **"X vs Y" Concept Comparisons**
   - Direct comparisons of similar concepts
   - Example: "docker build vs docker run", "useState vs useReducer"
   - Clarifies common confusion points

4. **Scenario-Based Decision Questions**
   - "When to use what" questions
   - Example: "Best database for flexible schemas?" → MongoDB
   - Tests practical application without deep implementation knowledge

5. **Common Pitfall Questions**
   - Focus on typical mistakes and gotchas
   - Example: "setState is asynchronous", "var vs let scoping"
   - Prepares for distractor answers in QCMs

6. **High-Frequency Concept Drills**
   - 80/20 rule: focus on concepts appearing in 80% of questions
   - Example: React hooks, Git workflows, SQL JOINs
   - Maximizes score impact per study minute

### Explanation Format for MCQs

Each MCQ explanation should follow this structure:
1. Why the correct answer is right (1 sentence)
2. Why common wrong answers are wrong (1-2 sentences)
3. Additional context or gotcha if relevant (optional, 1 sentence)

Example:
```
"useEffect avec [] s'exécute une seule fois après le montage, comme componentDidMount. 
Sans [], il s'exécute après chaque rendu. useState gère l'état, pas les effets de bord."
```

## Keyword Comparison Maps

### Planned Comparison Tables

1. **Frontend Frameworks:**
   - React vs Angular vs Vue
   - jQuery vs Vanilla JavaScript
   - HTML vs JSX

2. **Backend Frameworks:**
   - Express vs Laravel vs Spring Boot (routing, middleware, ORM)
   - PHP vs Node.js (language features)

3. **Databases:**
   - MySQL vs MongoDB (already exists, may expand)
   - SQL vs NoSQL (general concepts)

4. **Mobile:**
   - Android vs iOS vs React Native (already exists, may expand)
   - Kotlin vs Swift (syntax comparison)

5. **DevOps:**
   - Docker vs Kubernetes (already exists, may expand)
   - Jenkins vs GitHub Actions (already exists, may expand)
   - Git commands (fetch vs pull vs merge vs rebase)

6. **Languages:**
   - JavaScript vs TypeScript
   - Java vs Kotlin
   - PHP vs modern PHP (7.x vs 8.x features)

7. **CSS Frameworks:**
   - Bootstrap vs Tailwind vs vanilla CSS

8. **Testing:**
   - Unit vs Integration vs E2E testing

9. **Security:**
   - Authentication vs Authorization
   - Symmetric vs Asymmetric encryption

10. **Networking:**
    - HTTP vs HTTPS
    - TCP vs UDP
    - REST vs GraphQL

Target: 15-20 comparison tables total (8 exist, add 7-12 new)

## File Naming and Export Conventions

### New Files to Create

**Flashcards:**
1. `html.js` → `export const htmlFlashcards`
2. `css.js` → `export const cssFlashcards`
3. `bootstrap.js` → `export const bootstrapFlashcards`
4. `jquery.js` → `export const jqueryFlashcards`
5. `angular.js` → `export const angularFlashcards`
6. `php.js` → `export const phpFlashcards`
7. `laravel.js` → `export const laravelFlashcards`
8. `nodejs-express.js` → `export const nodejsExpressFlashcards`
9. `java-jee.js` → `export const javaJeeFlashcards`
10. `spring-hibernate.js` → `export const springHibernateFlashcards`
11. `mobile.js` → `export const mobileFlashcards`
12. `mysql.js` → `export const mysqlFlashcards`
13. `mongodb.js` → `export const mongodbFlashcards`
14. `devops-tools.js` → `export const devopsToolsFlashcards`
15. `security-networking.js` → `export const securityNetworkingFlashcards`
16. `fundamentals.js` → `export const fundamentalsFlashcards`

**MCQs:** (Same 16 files with `MCQs` suffix in export names)

### Files to Remove

- `src/data/flashcards/databases.js` (replaced by mysql.js and mongodb.js)
- `src/data/flashcards/backend.js` (replaced by specific framework files)
- `src/data/flashcards/devops.js` (replaced by devops-tools.js)
- `src/data/mcqs/databases.js`
- `src/data/mcqs/backend.js`
- `src/data/mcqs/devops.js`

### Index File Updates

Both `src/data/flashcards/index.js` and `src/data/mcqs/index.js` must be updated to:
1. Remove imports for deleted files
2. Add imports for all 16 new files
3. Spread all arrays in the export

## ID Management Strategy

### Composite ID System

**Format:** `{technology}-{number}`

**Benefits:**
1. **File Independence:** Each file manages its own numbering (1, 2, 3, ...)
2. **Easy Expansion:** Add new content without checking other files
3. **Clear Origin:** ID immediately shows which technology it belongs to
4. **No Conflicts:** Technology prefix ensures uniqueness across files

**Examples:**
- Flashcards: `react-1`, `react-2`, ..., `react-50`, `html-1`, `html-2`, ...
- MCQs: `react-1`, `react-2`, ..., `react-40`, `html-1`, `html-2`, ...

**Technology Prefixes:**
- React: `react`
- JavaScript: `javascript`
- HTML: `html`
- CSS: `css`
- Bootstrap: `bootstrap`
- PHP: `php`
- Laravel: `laravel`
- Node.js/Express: `nodejs-express`
- Docker: `docker`
- Git: `git`
- MySQL: `mysql`
- MongoDB: `mongodb`
- Java/JEE: `java-jee`
- Spring/Hibernate: `spring-hibernate`
- Angular: `angular`
- jQuery: `jquery`
- Mobile: `mobile`
- DevOps Tools: `devops-tools`
- Security/Networking: `security-networking`
- Fundamentals: `fundamentals`

### Migration of Existing Content

All existing files must be updated to use the new composite ID format:
1. Read each existing file
2. Replace numeric IDs with `{deck/topic}-{sequentialNumber}` format
3. Start numbering from 1 within each file
4. Preserve all other data unchanged

## Error Handling

### Content Validation

Before finalizing each file, validate:
1. All IDs are unique within the content type (flashcards or MCQs)
2. Difficulty values are exactly "Base", "Junior", or "Intermédiaire"
3. Deck/topic names match the technology classification
4. MCQ correctAnswers indices are valid for the choices array
5. MCQ multiSelect matches the number of correct answers (true if > 1)
6. No empty strings in required fields
7. Difficulty distribution approximates target percentages

### Integration Validation

After updating index files:
1. Verify all imports resolve correctly
2. Ensure composite IDs follow the correct format pattern
3. Confirm the application can load and filter content by topic
4. Test that difficulty filtering works correctly
5. Verify review tracking works with string-based IDs

## Testing Strategy

### Content Quality Checks

1. **Accuracy Review:** Verify technical accuracy of all questions and answers
2. **Language Review:** Ensure French grammar and technical term usage is correct
3. **Difficulty Calibration:** Confirm questions match their assigned difficulty level
4. **Explanation Quality:** Verify MCQ explanations clarify both correct and incorrect answers

### Functional Testing

1. **Application Integration:** Load the app and verify all new topics appear in filters
2. **Flashcard Display:** Test that flashcards flip correctly and show all metadata
3. **MCQ Interaction:** Test single-select and multi-select MCQs function correctly
4. **Keyword Maps:** Verify comparison tables render properly in the Maps page
5. **Review Tracking:** Confirm needsReview toggle works for new flashcards

### Volume Verification

Create a script or manual check to count:
- Total flashcards per topic
- Total MCQs per topic
- Difficulty distribution per topic
- Verify counts fall within target ranges

## Implementation Phases

### Phase 0: ID Migration
- Update all existing flashcard and MCQ files to use composite ID format
- Convert numeric IDs to `{technology}-{number}` format
- Start each file's numbering from 1
- Verify application still functions correctly with string IDs

### Phase 1: Existing Content Expansion
- Expand React, JavaScript, Docker, Git to meet new volume targets
- Continue sequential numbering within each file
- Apply difficulty distribution to new content

### Phase 2: Heavy Topics (New Files)
- Create HTML, CSS, Bootstrap, PHP, Laravel, Node.js/Express, MySQL, MongoDB
- 40-50 flashcards, 30-40 MCQs each
- Focus on high-frequency concepts and QCM patterns

### Phase 3: Medium Topics (New Files)
- Create Java/JEE, Spring/Hibernate, Angular, jQuery
- 30-35 flashcards, 20-22 MCQs each
- Balance breadth and depth for junior-level knowledge

### Phase 4: Grouped Topics (New Files)
- Create Mobile, DevOps-tools, Security-Networking, Fundamentals
- 35-40 flashcards, 22-25 MCQs each
- Ensure proportional coverage of sub-technologies

### Phase 5: Keyword Maps Expansion
- Add 7-12 new comparison tables
- Focus on commonly confused technologies
- Ensure visual clarity and pattern recognition value

### Phase 6: Integration and Cleanup
- Update both index.js files
- Remove deprecated files (databases.js, backend.js, devops.js)
- Validate ID uniqueness and data structure consistency
- Test application functionality with full content set

## Content Creation Guidelines

### Flashcard Best Practices

1. **Question Clarity:** Use direct, unambiguous questions
2. **Answer Conciseness:** Keep answers focused and memorable
3. **Keyword Emphasis:** Include trigger words that appear in QCMs
4. **Practical Focus:** Prefer "what/when/why" over "how to implement"
5. **Comparison Format:** Use "X vs Y" structure for similar concepts

### MCQ Best Practices

1. **Realistic Distractors:** Wrong answers should be plausible but clearly incorrect
2. **Avoid Absolutes:** Don't use "always/never" unless technically accurate
3. **Balanced Difficulty:** Mix straightforward and tricky questions
4. **Multi-Select Clarity:** Use multi-select for "which are true" questions
5. **Explanation Value:** Teach through explanations, don't just confirm answers

### Language Guidelines

1. **Technical Terms:** Keep English terms when standard in French tech context
   - Examples: "hook", "container", "middleware", "callback"
2. **French Phrasing:** Use natural French sentence structure
3. **Code Formatting:** Use backticks or clear formatting for code/commands
4. **Consistency:** Maintain consistent terminology across all content
5. **Brevity:** Favor concise phrasing without sacrificing clarity

## Success Metrics

1. **Volume Targets Met:** All topics within specified flashcard/MCQ ranges
2. **Difficulty Distribution:** Within ±5% of target percentages per topic
3. **No Duplicate IDs:** Zero ID conflicts across all content
4. **Application Stability:** No errors loading or filtering content
5. **Content Quality:** Technical accuracy verified for all questions
6. **User Value:** Content aligns with QCM preparation strategies from research
