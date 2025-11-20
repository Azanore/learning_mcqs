# Design Document

## Overview

This design outlines the targeted flashcard expansion strategy (Phase 2) for the Junior Dev QCM revision application. The expansion adds 25-30 flashcards per topic, focusing on filling knowledge gaps identified by analyzing BOTH existing flashcards AND MCQs. The design emphasizes code syntax, query patterns, and practical commands with an 80% base / 20% junior difficulty distribution.

The approach prioritizes comprehensive gap analysis before content creation: reading existing flashcards to understand current coverage, reading existing MCQs to identify concepts that should be in flashcards, then creating new flashcards to achieve complete standalone coverage. All content maintains the same data structures and follows sequential numbering from existing flashcards.

## Architecture

### Content Organization

```
src/data/
├── flashcards/
│   ├── [existing files to expand with 25-30 new flashcards each]
│   └── index.js (no changes needed)
└── mcqs/
    └── [read for gap analysis only, no modifications]
```

### Priority Topics (Code/Query Focus)

**Batch 1 - Database & Queries:**
- MySQL (SQL syntax, queries, JOINs, commands)
- MongoDB (query syntax, aggregation, operators)

**Batch 2 - Version Control:**
- Git (commands, workflows, branching)

**Batch 3 - Core Languages:**
- JavaScript (syntax, methods, operators)
- PHP (syntax, functions, arrays)

**Batch 4 - Frontend Frameworks:**
- React (hooks syntax, JSX patterns)
- Angular (directives, decorators, syntax)

**Batch 5 - Backend Frameworks:**
- Laravel (Artisan commands, Eloquent syntax, routing)
- Node.js/Express (middleware syntax, routing, methods)

**Batch 6 - Additional Topics:**
- Docker (commands, Dockerfile syntax)
- HTML (tags, attributes, forms)
- CSS (properties, selectors, values)
- Bootstrap (classes, grid syntax)

## Components and Interfaces

### Flashcard Data Structure

```javascript
{
  id: String,              // Composite ID: "{deck}-{number}" (e.g., "mysql-51")
  deck: String,            // Technology name (e.g., "MySQL")
  difficulty: String,      // "Base" (80%) or "Junior" (20%)
  front: String,           // Question text in French
  back: String,            // Answer text in French
  needsReview: Boolean     // Default false
}
```

### MCQ Data Structure

```javascript
{
  id: String,              // Composite ID: "{topic}-{number}" (e.g., "mysql-41")
  topic: String,           // Technology name (e.g., "MySQL")
  difficulty: String,      // "Base" (80%) or "Junior" (20%)
  question: String,        // Question text in French
  choices: Array<String>,  // 4 answer options
  correctAnswers: Array<Number>, // Zero-based indices of correct choices
  explanation: String,     // Explanation in French
  multiSelect: Boolean     // true if multiple correct answers
}
```

## Data Models

### Content Volume Targets

| Topic | Current Flashcards | Target Add | Current MCQs (for gap analysis) |
|-------|-------------------|------------|--------------------------------|
| MySQL | 45 | 25-30 | 35 |
| MongoDB | 45 | 25-30 | 35 |
| Git | 35 | 25-30 | 22 |
| JavaScript | 45 | 25-30 | 35 |
| PHP | 45 | 25-30 | 35 |
| React | 45 | 25-30 | 35 |
| Angular | 35 | 25-30 | 22 |
| Laravel | 45 | 25-30 | 35 |
| Node.js/Express | 45 | 25-30 | 35 |
| Docker | 35 | 25-30 | 22 |
| HTML | 45 | 25-30 | 35 |
| CSS | 45 | 25-30 | 35 |
| Bootstrap | 45 | 25-30 | 35 |

### Difficulty Distribution

**All Topics:**
- Base: 80% (~20-24 flashcards per 25-30)
- Junior: 20% (~5-6 flashcards per 25-30)
- Intermédiaire: 0%

## Content Strategy

### Gap Analysis Process

For each topic, before creating flashcards:
1. Read existing flashcards to understand current coverage
2. Read existing MCQs to identify concepts covered in MCQs but missing from flashcards
3. Identify missing concepts, commands, or syntax patterns
4. List underrepresented areas in flashcards
5. Create 25-30 new flashcards targeting those gaps to achieve complete standalone coverage

### Code/Query-Focused Content Types

1. **SQL Query Patterns (MySQL)**
   - SELECT variations (DISTINCT, LIMIT, ORDER BY)
   - JOIN types and syntax
   - Aggregate functions (COUNT, SUM, AVG, GROUP BY)
   - WHERE clause operators
   - INSERT, UPDATE, DELETE syntax
   - CREATE TABLE, ALTER TABLE commands
   - Index and constraint syntax

2. **NoSQL Query Patterns (MongoDB)**
   - find() query operators ($eq, $gt, $in, etc.)
   - Aggregation pipeline stages
   - Update operators ($set, $push, $pull)
   - Collection methods
   - Index creation syntax
   - Document structure patterns

3. **Git Commands**
   - Basic commands (add, commit, push, pull)
   - Branching commands (branch, checkout, merge)
   - Stash operations
   - Reset and revert
   - Remote operations
   - Log and diff commands
   - Tag operations

4. **JavaScript Syntax**
   - Array methods (some, every, includes, flat)
   - String methods (split, trim, replace, substring)
   - Object methods (assign, freeze, seal)
   - Math operations
   - Date operations
   - Operators (optional chaining, nullish coalescing)
   - Template literals

5. **PHP Syntax**
   - Array functions (array_map, array_filter, array_reduce)
   - String functions (str_replace, substr, explode, implode)
   - Superglobals ($_GET, $_POST, $_SESSION)
   - File operations
   - Error handling (try/catch)
   - Type declarations

6. **React Hooks Syntax**
   - Hook rules and patterns
   - Custom hooks
   - Hook dependencies
   - Conditional hooks (anti-patterns)
   - Hook combinations

7. **Laravel Syntax**
   - Artisan commands (make:model, migrate, etc.)
   - Eloquent query methods (where, find, create)
   - Route definitions
   - Middleware syntax
   - Blade directives (@if, @foreach, @include)
   - Validation rules

8. **Express Syntax**
   - Route methods (get, post, put, delete)
   - Middleware patterns
   - Request/response methods
   - Error handling middleware
   - Router usage

9. **Docker Commands**
   - Container commands (run, start, stop, rm)
   - Image commands (build, pull, push, rmi)
   - Dockerfile instructions
   - docker-compose commands
   - Volume and network commands

10. **HTML/CSS/Bootstrap**
    - HTML5 semantic tags
    - Form input types
    - CSS selectors and specificity
    - Flexbox properties
    - Grid properties
    - Bootstrap utility classes
    - Bootstrap grid classes

### Question Format Guidelines

**Flashcards:**
- "Quelle commande Git pour [action] ?"
- "Syntaxe SQL pour [operation] ?"
- "Que fait [method/command] ?"
- "Comment [action] en [technology] ?"

**MCQs:**
- "Quelle est la syntaxe correcte pour [operation] ?"
- "Que retourne [method/command] ?"
- "Quelles commandes [action] ?" (multi-select)
- "Quel est le résultat de [code snippet] ?"

### Explanation Format for MCQs

Focus on:
1. Why the correct answer is right (syntax/behavior)
2. Common mistakes or confusions
3. Related commands or alternatives

Example:
```
"SELECT DISTINCT élimine les doublons dans les résultats. 
UNIQUE est pour les contraintes, pas les requêtes. 
GROUP BY regroupe mais ne supprime pas automatiquement les doublons."
```

## ID Management Strategy

### Sequential Numbering

- Read the last ID in each file
- Extract the number from the composite ID
- Start new content at lastNumber + 1
- Example: If last flashcard is "mysql-45", start at "mysql-46"

### Batch Processing

Each batch processes 2-4 topics completely before moving to the next:
1. Read existing flashcards
2. Read existing MCQs for gap analysis
3. Identify gaps (concepts in MCQs but not flashcards, missing syntax/commands)
4. Create 25-30 new flashcards
5. Move to next topic in batch

## Error Handling

### Content Validation

Before finalizing each file:
1. Verify IDs are sequential and unique
2. Confirm difficulty distribution (~80% Base, ~20% Junior)
3. Check no duplicate questions
4. Ensure all required fields are present
5. Validate MCQ correctAnswers indices

## Implementation Phases

### Phase 1: Database Topics (Batch 1)
- MySQL: Add 25-30 flashcards (SQL syntax, queries, commands)
- MongoDB: Add 25-30 flashcards (query operators, aggregation)

### Phase 2: Version Control (Batch 2)
- Git: Add 25-30 flashcards (commands, workflows, branching)

### Phase 3: Core Languages (Batch 3)
- JavaScript: Add 25-30 flashcards (methods, syntax, operators)
- PHP: Add 25-30 flashcards (functions, arrays, syntax)

### Phase 4: Frontend Frameworks (Batch 4)
- React: Add 25-30 flashcards (hooks, JSX, patterns)
- Angular: Add 25-30 flashcards (decorators, directives, syntax)

### Phase 5: Backend Frameworks (Batch 5)
- Laravel: Add 25-30 flashcards (Artisan, Eloquent, routing)
- Node.js/Express: Add 25-30 flashcards (routing, middleware, methods)

### Phase 6: Additional Topics (Batch 6)
- Docker: Add 25-30 flashcards (commands, Dockerfile)
- HTML: Add 25-30 flashcards (tags, attributes, forms)
- CSS: Add 25-30 flashcards (properties, selectors, values)
- Bootstrap: Add 25-30 flashcards (classes, grid, utilities)

## Content Creation Guidelines

### Flashcard Best Practices

1. **Direct Questions:** "Quelle commande pour X ?"
2. **Syntax Focus:** Include code examples when relevant
3. **Concise Answers:** Focus on the essential information
4. **Practical:** Real-world usage over theory

### MCQ Best Practices

1. **Code Snippets:** Include actual syntax in questions
2. **Realistic Distractors:** Similar but incorrect syntax
3. **Multi-Select:** For "which commands do X" questions
4. **Clear Explanations:** Clarify syntax differences

### Language Guidelines

1. **Technical Terms:** Keep English when standard (commit, push, pull, hook, middleware)
2. **French Phrasing:** Natural French sentence structure
3. **Code Formatting:** Clear inline code examples
4. **Consistency:** Match existing content style

## Success Metrics

1. **Volume:** 25-30 flashcards added per topic
2. **Difficulty:** 80% Base, 20% Junior distribution
3. **No Duplicates:** No near-duplicate flashcards
4. **Gap Coverage:** All concepts from MCQs covered in flashcards, all identified gaps addressed
5. **Sequential IDs:** Proper continuation from existing flashcards
6. **Standalone Completeness:** Flashcards provide comprehensive coverage without needing MCQs
