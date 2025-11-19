# Requirements Document

## Introduction

This specification defines the requirements for expanding the educational content of the Junior Dev QCM revision application. The application currently contains limited flashcards and multiple-choice questions (MCQs) covering React, JavaScript, Docker, Git, Databases, Backend, and DevOps. The expansion will add comprehensive content across 21 technology topics, organized by importance and difficulty levels, and will include keyword comparison maps to provide junior developers with a complete study resource for technical assessments.

## Glossary

- **Application**: The Junior Dev QCM revision web application built with React
- **Flashcard**: A study card with a question (front) and answer (back), including metadata for deck, difficulty, and review status
- **MCQ**: Multiple-choice question with choices, correct answers, explanation, and support for single or multi-select
- **Content File**: A JavaScript file exporting an array of flashcards or MCQs for a specific technology topic
- **Difficulty Level**: Classification of content as "Base" (foundational), "Junior" (1-2 years experience), or "Intermédiaire" (intermediate/advanced)
- **Heavy Topic**: Core technologies requiring extensive coverage (40-50 flashcards, 30-40 MCQs)
- **Medium Topic**: Important technologies requiring moderate coverage (30-35 flashcards, 20-22 MCQs)
- **Grouped Topic**: Multiple related technologies combined in one file (35-40 flashcards, 22-25 MCQs total)
- **Keyword Map**: Comparison table showing side-by-side differences between related technologies for pattern recognition
- **QCM Strategy**: Study approach based on pattern recognition, keyword association, and active recall optimized for multiple-choice assessments

## Requirements

### Requirement 1: Content Volume and Distribution

**User Story:** As a junior developer preparing for technical assessments, I want comprehensive study materials across all relevant technologies, so that I can confidently answer questions on both familiar and unfamiliar topics.

#### Acceptance Criteria

1. WHERE the technology is classified as Heavy (React, JavaScript, HTML, CSS, Bootstrap, PHP, Laravel, Node.js/Express, MySQL, MongoDB), THE Application SHALL contain between 40 and 50 flashcards per technology
2. WHERE the technology is classified as Heavy, THE Application SHALL contain between 30 and 40 MCQs per technology
3. WHERE the technology is classified as Medium (Docker, Git, Java/JEE, Spring/Hibernate, Angular, jQuery), THE Application SHALL contain between 30 and 35 flashcards per technology
4. WHERE the technology is classified as Medium, THE Application SHALL contain between 20 and 22 MCQs per technology
5. WHERE the technology is classified as Grouped (Mobile, DevOps-tools, Security-Networking, Fundamentals), THE Application SHALL contain between 35 and 40 flashcards covering all sub-technologies within that group
6. WHERE the technology is classified as Grouped, THE Application SHALL contain between 22 and 25 MCQs covering all sub-technologies within that group

### Requirement 2: Difficulty Distribution

**User Story:** As a junior developer, I want study materials that progress from basic to advanced concepts, so that I can build confidence gradually and identify my knowledge gaps.

#### Acceptance Criteria

1. WHERE the technology is classified as Heavy or Medium, THE Application SHALL distribute flashcard difficulty levels with 50% Base, 35% Junior, and 15% Intermédiaire
2. WHERE the technology is classified as Grouped, THE Application SHALL distribute flashcard difficulty levels with 55% Base, 30% Junior, and 15% Intermédiaire
3. THE Application SHALL apply the same difficulty distribution to MCQs as specified for flashcards within each technology classification
4. THE Application SHALL ensure each difficulty level is explicitly labeled in the content metadata

### Requirement 3: Content Quality and QCM Optimization

**User Story:** As a junior developer studying for QCM assessments, I want questions that focus on practical knowledge, pattern recognition, and common pitfalls, so that I can efficiently prepare for the actual exam format.

#### Acceptance Criteria

1. THE Application SHALL include flashcards that focus on keyword-trigger associations for rapid technology identification
2. THE Application SHALL include flashcards that compare similar concepts across technologies using "X vs Y" format
3. THE Application SHALL include MCQs with explanations that clarify why wrong answers are incorrect, not only why the correct answer is right
4. THE Application SHALL prioritize high-frequency concepts that appear in 80% of junior-level technical assessments
5. THE Application SHALL include practical scenario-based questions that test "when to use what" decision-making
6. THE Application SHALL avoid obscure edge cases, deprecated features, and overly theoretical concepts unless in the Fundamentals grouped topic
7. THE Application SHALL include syntax comparison questions for similar technologies to help identify code snippet differences

### Requirement 4: File Structure and Organization

**User Story:** As a developer maintaining the application, I want a clear and consistent file structure for content, so that I can easily add, update, and manage study materials.

#### Acceptance Criteria

1. THE Application SHALL create 16 new content files in the flashcards data directory
2. THE Application SHALL create 16 new content files in the MCQs data directory
3. THE Application SHALL name files using kebab-case format matching the technology or group name
4. THE Application SHALL export a named constant from each flashcard file following the pattern `{technology}Flashcards`
5. THE Application SHALL export a named constant from each MCQ file following the pattern `{technology}MCQs`
6. THE Application SHALL update the index files in both flashcards and MCQs directories to import and combine all new content arrays
7. WHERE a file represents a Grouped topic, THE Application SHALL ensure content covers each sub-technology proportionally

### Requirement 5: Content Metadata and Structure

**User Story:** As a user of the application, I want consistent data structure across all study materials, so that the application features (filtering, review tracking, difficulty selection) work correctly.

#### Acceptance Criteria

1. THE Application SHALL assign a unique composite ID to each flashcard using the format `{deck}-{sequentialNumber}`
2. THE Application SHALL assign a unique composite ID to each MCQ using the format `{topic}-{sequentialNumber}`
3. WHEN creating a flashcard, THE Application SHALL include properties for id, deck, difficulty, front, back, and needsReview
4. WHEN creating an MCQ, THE Application SHALL include properties for id, topic, difficulty, question, choices, correctAnswers, explanation, and multiSelect
5. THE Application SHALL use the technology name as the deck value for flashcards and topic value for MCQs
6. THE Application SHALL format correctAnswers as an array of zero-based indices corresponding to the choices array
7. THE Application SHALL set multiSelect to true when an MCQ has multiple correct answers, and false otherwise
8. THE Application SHALL start sequential numbering from 1 within each content file to enable independent expansion

### Requirement 6: Grouped Topic Coverage

**User Story:** As a junior developer, I want adequate coverage of less critical but still important technologies, so that I'm not caught off-guard by questions on topics I haven't studied.

#### Acceptance Criteria

1. WHERE the file is mobile.js, THE Application SHALL include content covering Android with Kotlin, iOS with Swift, React Native, and Flutter with Dart
2. WHERE the file is devops-tools.js, THE Application SHALL include content covering Kubernetes, Jenkins, SonarQube, and RabbitMQ
3. WHERE the file is security-networking.js, THE Application SHALL include content covering cybersecurity fundamentals and networking fundamentals
4. WHERE the file is fundamentals.js, THE Application SHALL include content covering basic computer science, systems, logic, and general IT concepts
5. THE Application SHALL distribute content within grouped files to provide 6 to 8 flashcards per sub-technology
6. THE Application SHALL distribute content within grouped files to provide 3 to 4 MCQs per sub-technology

### Requirement 7: Existing Content Enhancement

**User Story:** As a user who has already studied the existing materials, I want expanded coverage of current topics, so that I have more practice material and deeper understanding.

#### Acceptance Criteria

1. WHERE existing flashcard files contain fewer than the target volume, THE Application SHALL add flashcards to reach the specified range for that technology classification
2. WHERE existing MCQ files contain fewer than the target volume, THE Application SHALL add MCQs to reach the specified range for that technology classification
3. THE Application SHALL migrate all existing numeric IDs to composite ID format before adding new content
4. THE Application SHALL continue sequential numbering within each file when adding new content
5. THE Application SHALL preserve all existing content questions and answers when migrating ID format
6. THE Application SHALL follow the same difficulty distribution when adding content to existing files

### Requirement 8: Content Language and Formatting

**User Story:** As a French-speaking junior developer, I want all study materials in French with clear, concise language, so that I can study efficiently in my native language.

#### Acceptance Criteria

1. THE Application SHALL write all flashcard questions, answers, MCQ questions, choices, and explanations in French
2. THE Application SHALL use technical terms in their original English form when they are commonly used untranslated in French technical contexts
3. THE Application SHALL format code snippets and commands in monospace-compatible text within content strings
4. THE Application SHALL keep flashcard questions concise, typically under 15 words
5. THE Application SHALL keep flashcard answers concise, typically under 30 words
6. THE Application SHALL write MCQ explanations that are clear and educational, typically 20 to 40 words

### Requirement 9: Keyword Comparison Maps

**User Story:** As a junior developer preparing for QCM assessments, I want visual comparison tables between similar technologies, so that I can quickly recognize patterns and eliminate wrong answers based on keyword associations.

#### Acceptance Criteria

1. THE Application SHALL create keyword comparison maps for technology pairs and groups that are commonly confused in QCM assessments
2. THE Application SHALL structure each keyword map with a title, type designation as "table", and data containing headers and rows
3. THE Application SHALL include comparison maps for at least 15 technology comparisons covering frontend, backend, databases, mobile, and DevOps domains
4. THE Application SHALL format comparison maps to highlight key differentiators such as syntax differences, use cases, and core concepts
5. THE Application SHALL update the keywordMaps.js file to include all new comparison tables
6. THE Application SHALL assign unique sequential IDs to each keyword map
7. THE Application SHALL ensure keyword maps complement the flashcard and MCQ content by focusing on side-by-side pattern recognition
