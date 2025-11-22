# Requirements Document

## Introduction

This specification defines requirements for a targeted flashcard expansion (Phase 3) of the Junior Dev QCM revision application. This expansion focuses on filling knowledge gaps by analyzing both existing flashcards AND MCQs, then creating comprehensive flashcard coverage (25-30 new flashcards per topic). The content emphasizes backend frameworks, Java ecosystem, mobile development, security, DevOps, and fundamental concepts (80% base, 20% junior) to ensure complete flashcard coverage of all topics present in the application.

## Glossary

- **Application**: The Junior Dev QCM revision web application built with React
- **Flashcard**: A study card with a question (front) and answer (back), including metadata for deck, difficulty, and review status
- **MCQ**: Multiple-choice question with choices, correct answers, explanation, and support for single or multi-select
- **Gap-Filling Content**: Targeted questions addressing missing concepts or underrepresented areas in existing content
- **Base Level**: Foundational concepts that every junior developer should know
- **Junior Level**: Concepts requiring 1-2 years of practical experience
- **Framework Focus**: Content emphasizing framework-specific syntax, annotations, commands, and patterns

## Requirements

### Requirement 1: Content Volume and Distribution

**User Story:** As a junior developer, I want focused supplementary content that fills gaps in my knowledge across Java, mobile, security, and fundamentals, so that I can quickly review missing concepts without overwhelming volume.

#### Acceptance Criteria

1. THE Application SHALL add between 25 and 30 flashcards per technology topic to fill all knowledge gaps
2. THE Application SHALL NOT create any new MCQs in this expansion
3. THE Application SHALL prioritize topics with framework patterns, security concepts, and fundamental principles
4. THE Application SHALL identify gaps by analyzing BOTH existing flashcards AND existing MCQs before creating new flashcards
5. THE Application SHALL continue sequential numbering from the last existing flashcard in each file

### Requirement 2: Difficulty Distribution

**User Story:** As a junior developer building foundational knowledge, I want content heavily weighted toward basic concepts, so that I can master fundamentals before advancing.

#### Acceptance Criteria

1. THE Application SHALL distribute flashcard difficulty with 80% Base and 20% Junior
2. THE Application SHALL exclude Intermédiaire level content from this expansion
3. THE Application SHALL ensure difficulty labels match the actual complexity of questions

### Requirement 3: Content Focus and Quality

**User Story:** As a junior developer preparing for technical assessments, I want content focused on practical framework patterns, security concepts, and core programming fundamentals, so that I can quickly recognize and apply correct approaches.

#### Acceptance Criteria

1. THE Application SHALL prioritize annotations, configuration, and ORM patterns for Spring & Hibernate
2. THE Application SHALL prioritize Java collections, servlets, and syntax patterns for Java/JEE
3. THE Application SHALL prioritize mobile-specific patterns for React Native and Flutter
4. THE Application SHALL prioritize authentication, encryption, and vulnerabilities for Security & Networking
5. THE Application SHALL prioritize CI/CD tools and automation for DevOps Tools
6. THE Application SHALL prioritize algorithms, OOP, and design patterns for Fundamentals
8. THE Application SHALL include code snippet examples in questions where relevant
9. THE Application SHALL focus on "how to write" and "what does this do" question types
10. THE Application SHALL avoid theoretical concepts already well-covered in existing content

### Requirement 4: Gap Analysis and Content Strategy

**User Story:** As a developer maintaining the application, I want new flashcards to cover concepts from MCQs that aren't in flashcards, so that users have complete flashcard coverage for all topics.

#### Acceptance Criteria

1. WHEN adding flashcards to a file, THE Application SHALL read and analyze BOTH existing flashcards AND existing MCQs
2. THE Application SHALL identify concepts present in MCQs but missing from flashcards
3. THE Application SHALL identify underrepresented concepts, syntax patterns, or commands in flashcards
4. THE Application SHALL avoid creating near-duplicate flashcards
5. THE Application SHALL focus on practical gaps (missing commands, syntax variations, common use cases)
6. THE Application SHALL ensure flashcards provide complete standalone coverage of the topic

### Requirement 5: Content Metadata and Structure

**User Story:** As a user of the application, I want consistent data structure for all content, so that new materials work correctly with existing application features.

#### Acceptance Criteria

1. THE Application SHALL use composite IDs following the format `{deck}-{sequentialNumber}`
2. THE Application SHALL continue numbering from the last existing ID in each file
3. WHEN creating a flashcard, THE Application SHALL include properties for id, deck, difficulty, front, back, and needsReview
4. THE Application SHALL maintain the same deck/topic names as existing content
5. THE Application SHALL set needsReview to false by default

### Requirement 6: Batch Processing Strategy

**User Story:** As a developer implementing this expansion, I want to work in manageable batches, so that I can maintain quality and avoid errors.

#### Acceptance Criteria

1. THE Application SHALL process topics in batches of 2-3 files at a time
2. THE Application SHALL complete flashcard creation for a topic before moving to the next
3. THE Application SHALL not include verification or testing tasks between batches
4. THE Application SHALL focus exclusively on flashcard creation without integration testing

### Requirement 7: Priority Topics

**User Story:** As a junior developer, I want expanded coverage of Java ecosystem, mobile development, security, and fundamentals, so that I can practice the most important skills for my career.

#### Acceptance Criteria

1. THE Application SHALL prioritize Spring & Hibernate for Java enterprise patterns
2. THE Application SHALL prioritize Java/JEE for core Java concepts
3. THE Application SHALL prioritize Mobile for cross-platform development
4. THE Application SHALL prioritize Security & Networking for application security
5. THE Application SHALL prioritize DevOps Tools for deployment and automation
6. THE Application SHALL prioritize Fundamentals for core computer science concepts

### Requirement 8: Content Language and Formatting

**User Story:** As a French-speaking junior developer, I want all new materials in French with clear code examples, so that I can study efficiently.

#### Acceptance Criteria

1. THE Application SHALL write all content in French
2. THE Application SHALL use technical terms in English when standard in French technical contexts
3. THE Application SHALL format code snippets clearly within content strings
4. THE Application SHALL keep flashcard questions concise (under 15 words)
5. THE Application SHALL keep flashcard answers concise (under 30 words)

### Requirement 9: Topic-Specific Content Requirements

**User Story:** As a junior developer, I want topic-specific content that addresses the unique aspects of each technology, so that I can learn the most relevant concepts for each area.

#### Acceptance Criteria

1. FOR Spring & Hibernate, THE Application SHALL include annotations, configuration patterns, ORM mappings, and dependency injection
2. FOR Java/JEE, THE Application SHALL include collections methods, Stream API, servlets, JSP, and exception handling
3. FOR Mobile, THE Application SHALL include React Native components, Flutter widgets, and mobile-specific patterns
4. FOR Security & Networking, THE Application SHALL include authentication methods, encryption algorithms, vulnerabilities, and protocols
5. FOR DevOps Tools, THE Application SHALL include CI/CD tools, monitoring, infrastructure as code, and deployment strategies
6. FOR Fundamentals, THE Application SHALL include data structures, algorithms, OOP principles, design patterns, and SOLID principles
