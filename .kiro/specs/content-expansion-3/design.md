# Design Document

## Overview

This design outlines the targeted flashcard expansion strategy (Phase 3) for the Junior Dev QCM revision application. The expansion adds 25-30 flashcards per topic, focusing on filling knowledge gaps identified by analyzing BOTH existing flashcards AND MCQs. The design emphasizes code syntax, framework patterns, security concepts, and practical commands with an 80% base / 20% junior difficulty distribution.

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

### Priority Topics (Code/Framework/Security Focus)

**Batch 1 - Java Ecosystem:**
- Java/JEE (syntax, collections, servlets, JSP)
- Spring & Hibernate (annotations, configuration, ORM patterns)

**Batch 2 - Mobile:**
- Mobile (React Native, Flutter, mobile-specific concepts)

**Batch 3 - Security & Operations:**
- Security & Networking (authentication, encryption, protocols, vulnerabilities)
- DevOps Tools (CI/CD, Jenkins, monitoring, automation)

**Batch 4 - Core Concepts:**
- Fundamentals (algorithms, data structures, OOP, design patterns)

## Components and Interfaces

### Flashcard Data Structure

```javascript
{
  id: String,              // Composite ID: "{deck}-{number}" (e.g., "laravel-79")
  deck: String,            // Technology name (e.g., "Laravel")
  difficulty: String,      // "Base" (80%) or "Junior" (20%)
  front: String,           // Question text in French
  back: String,            // Answer text in French
  needsReview: Boolean     // Default false
}
```

### MCQ Data Structure

```javascript
{
  id: String,              // Composite ID: "{topic}-{number}" (e.g., "laravel-41")
  topic: String,           // Technology name (e.g., "Laravel")
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
| Java/JEE | 34 | 25-30 | 21 |
| Spring & Hibernate | 34 | 25-30 | 21 |
| Mobile | 37 | 25-30 | 24 |
| Security & Networking | 57 | 25-30 | 24 |
| DevOps Tools | 38 | 25-30 | 25 |
| Fundamentals | 39 | 25-30 | 25 |

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

### Code/Framework-Focused Content Types

1. **Spring & Hibernate Patterns**
   - Spring annotations (@Component, @Autowired, @Service, @Repository)
   - Configuration patterns (XML vs Java config)
   - Hibernate annotations (@Entity, @Table, @Column, @OneToMany)
   - Transaction management
   - Dependency injection patterns
   - JPA query methods

2. **Java/JEE Syntax**
   - Collections framework (List, Set, Map methods)
   - Stream API operations
   - Servlet lifecycle and methods
   - JSP directives and tags
   - Exception handling patterns
   - Generics and lambda expressions

3. **Mobile Development**
   - React Native components and APIs
   - Flutter widgets and patterns
   - Mobile-specific concepts (navigation, state management)
   - Platform-specific code
   - Mobile UI patterns
   - Performance optimization

4. **Security & Networking**
   - Authentication methods (JWT, OAuth, session)
   - Encryption algorithms (AES, RSA, hashing)
   - Common vulnerabilities (XSS, CSRF, SQL injection)
   - Network protocols (HTTP, HTTPS, TCP, UDP)
   - Security headers and CORS
   - Certificate management

5. **DevOps Tools**
   - CI/CD concepts and tools (Jenkins, GitLab CI, GitHub Actions)
   - Container orchestration (Kubernetes basics)
   - Monitoring tools (Prometheus, Grafana)
   - Infrastructure as Code (Terraform, Ansible basics)
   - Build tools (Maven, Gradle)
   - Deployment strategies

6. **Fundamentals**
   - Data structures (arrays, linked lists, trees, graphs)
   - Algorithm complexity (Big O notation)
   - OOP principles (encapsulation, inheritance, polymorphism)
   - Design patterns (Singleton, Factory, Observer, Strategy)
   - SOLID principles
   - Testing concepts (unit, integration, TDD)

### Question Format Guidelines

**Flashcards:**
- "Quelle commande [framework] pour [action] ?"
- "Syntaxe [language/framework] pour [operation] ?"
- "Que fait [method/annotation] ?"
- "Comment [action] en [technology] ?"
- "Quelle annotation [framework] pour [purpose] ?"

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
"@Autowired permet l'injection de dépendances automatique en Spring. 
@Component marque une classe comme bean Spring. 
@Service est une spécialisation de @Component pour la couche service."
```

## ID Management Strategy

### Sequential Numbering

- Read the last ID in each file
- Extract the number from the composite ID
- Start new content at lastNumber + 1
- Example: If last flashcard is "laravel-78", start at "laravel-79"

### Batch Processing

Each batch processes 2-3 topics completely before moving to the next:
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
5. Validate French language quality

## Implementation Phases

### Phase 1: Java Ecosystem (Batch 1)
- Java/JEE: Add 25-30 flashcards (collections, servlets, JSP, syntax)
- Spring & Hibernate: Add 25-30 flashcards (annotations, ORM, configuration)

### Phase 2: Mobile (Batch 2)
- Mobile: Add 25-30 flashcards (React Native, Flutter, mobile patterns)

### Phase 3: Security & Operations (Batch 3)
- Security & Networking: Add 25-30 flashcards (auth, encryption, vulnerabilities)
- DevOps Tools: Add 25-30 flashcards (CI/CD, monitoring, automation)

### Phase 4: Core Concepts (Batch 4)
- Fundamentals: Add 25-30 flashcards (algorithms, OOP, design patterns)

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

1. **Technical Terms:** Keep English when standard in French technical contexts
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
