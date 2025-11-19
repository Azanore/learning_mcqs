# Implementation Plan

- [x] 1. Migrate existing content to composite ID format





- [x] 1.1 Update existing flashcard files to use composite IDs

  - Convert all numeric IDs to `{deck}-{number}` format in react.js, javascript.js, docker.js, git.js, databases.js, backend.js, devops.js
  - Start numbering from 1 within each file
  - _Requirements: 5.1, 5.8, 7.3_


- [x] 1.2 Update existing MCQ files to use composite IDs

  - Convert all numeric IDs to `{topic}-{number}` format in react.js, javascript.js, docker.js, git.js, databases.js, backend.js, devops.js
  - Start numbering from 1 within each file
  - _Requirements: 5.2, 5.8, 7.3_



- [ ] 1.3 Verify application functionality with composite IDs
  - Test flashcard display and filtering
  - Test MCQ display and answer checking

  - Test review tracking with string-based IDs


  - _Requirements: 5.3, 5.4_

- [x] 2. Expand existing content to meet new volume targets





- [x] 2.1 Expand React content

  - Add flashcards to reach 40-50 total (currently 10)
  - Add MCQs to reach 30-40 total (currently 5)
  - Follow 50% Base, 35% Junior, 15% Intermédiaire distribution

  - _Requirements: 1.1, 1.2, 2.1, 7.1, 7.2_


- [x] 2.2 Expand JavaScript content

  - Add flashcards to reach 40-50 total (currently 5)
  - Add MCQs to reach 30-40 total (currently 4)
  - Follow 50% Base, 35% Junior, 15% Intermédiaire distribution
  - _Requirements: 1.1, 1.2, 2.1, 7.1, 7.2_

- [x] 2.3 Expand Docker content

  - Add flashcards to reach 30-35 total (currently 7)
  - Add MCQs to reach 20-22 total (currently 4)
  - Follow 50% Base, 35% Junior, 15% Intermédiaire distribution
  - _Requirements: 1.3, 1.4, 2.1, 7.1, 7.2_

- [x] 2.4 Expand Git content


  - Add flashcards to reach 30-35 total
  - Add MCQs to reach 20-22 total
  - Follow 50% Base, 35% Junior, 15% Intermédiaire distribution
  - _Requirements: 1.3, 1.4, 2.1, 7.1, 7.2_




- [x] 3. Create Heavy topic content files (HTML, CSS, Bootstrap)

- [x] 3.1 Create HTML flashcards and MCQs
  - Create src/data/flashcards/html.js with 40-50 flashcards
  - Create src/data/mcqs/html.js with 30-40 MCQs
  - Follow 50% Base, 35% Junior, 15% Intermédiaire distribution
  - Focus on semantic HTML, forms, accessibility, HTML5 features
  - _Requirements: 1.1, 1.2, 2.1, 3.1, 3.2, 4.1, 4.2, 5.1-5.8, 8.1-8.6_

- [x] 3.2 Create CSS flashcards and MCQs
  - Create src/data/flashcards/css.js with 40-50 flashcards
  - Create src/data/mcqs/css.js with 30-40 MCQs
  - Follow 50% Base, 35% Junior, 15% Intermédiaire distribution
  - Focus on selectors, box model, flexbox, grid, positioning, responsive design
  - _Requirements: 1.1, 1.2, 2.1, 3.1, 3.2, 4.1, 4.2, 5.1-5.8, 8.1-8.6_

- [x] 3.3 Create Bootstrap flashcards and MCQs
  - Create src/data/flashcards/bootstrap.js with 40-50 flashcards
  - Create src/data/mcqs/bootstrap.js with 30-40 MCQs
  - Follow 50% Base, 35% Junior, 15% Intermédiaire distribution
  - Focus on grid system, components, utilities, responsive classes
  - _Requirements: 1.1, 1.2, 2.1, 3.1, 3.2, 4.1, 4.2, 5.1-5.8, 8.1-8.6_

- [x] 3.4 Wire HTML, CSS, Bootstrap to app and commit
  - Add imports to src/data/flashcards/index.js
  - Add imports to src/data/mcqs/index.js
  - Run git add . && git commit -m "feat: Add HTML, CSS, and Bootstrap content" && git push origin master
  - _Requirements: 4.6_

- [x] 4. Create Heavy topic content files (PHP, Laravel, Node.js/Express)




- [x] 4.1 Create PHP flashcards and MCQs


  - Create src/data/flashcards/php.js with 40-50 flashcards
  - Create src/data/mcqs/php.js with 30-40 MCQs
  - Follow 50% Base, 35% Junior, 15% Intermédiaire distribution
  - Focus on syntax, arrays, functions, OOP, superglobals, common functions
  - _Requirements: 1.1, 1.2, 2.1, 3.1, 3.2, 4.1, 4.2, 5.1-5.8, 8.1-8.6_

- [x] 4.2 Create Laravel flashcards and MCQs


  - Create src/data/flashcards/laravel.js with 40-50 flashcards
  - Create src/data/mcqs/laravel.js with 30-40 MCQs
  - Follow 50% Base, 35% Junior, 15% Intermédiaire distribution
  - Focus on routing, Eloquent ORM, middleware, Artisan, Blade templates
  - _Requirements: 1.1, 1.2, 2.1, 3.1, 3.2, 4.1, 4.2, 5.1-5.8, 8.1-8.6_

- [x] 4.3 Create Node.js/Express flashcards and MCQs


  - Create src/data/flashcards/nodejs-express.js with 40-50 flashcards
  - Create src/data/mcqs/nodejs-express.js with 30-40 MCQs
  - Follow 50% Base, 35% Junior, 15% Intermédiaire distribution
  - Focus on async/await, routing, middleware, npm, modules, REST APIs
  - _Requirements: 1.1, 1.2, 2.1, 3.1, 3.2, 4.1, 4.2, 5.1-5.8, 8.1-8.6_

- [x] 4.4 Wire PHP, Laravel, Node.js/Express to app and commit


  - Add imports to src/data/flashcards/index.js
  - Add imports to src/data/mcqs/index.js
  - Run git add . && git commit -m "feat: Add PHP, Laravel, and Node.js/Express content - Task 4 complete" && git push origin master
  - _Requirements: 4.6_
- [x] 5. Create Heavy topic content files (MySQL, MongoDB)



- [ ] 5. Create Heavy topic content files (MySQL, MongoDB)

- [x] 5.1 Create MySQL flashcards and MCQs


  - Create src/data/flashcards/mysql.js with 40-50 flashcards
  - Create src/data/mcqs/mysql.js with 30-40 MCQs
  - Follow 50% Base, 35% Junior, 15% Intermédiaire distribution
  - Focus on SQL queries, JOINs, indexes, transactions, normalization
  - _Requirements: 1.1, 1.2, 2.1, 3.1, 3.2, 4.1, 4.2, 5.1-5.8, 8.1-8.6_

- [x] 5.2 Create MongoDB flashcards and MCQs


  - Create src/data/flashcards/mongodb.js with 40-50 flashcards
  - Create src/data/mcqs/mongodb.js with 30-40 MCQs
  - Follow 50% Base, 35% Junior, 15% Intermédiaire distribution
  - Focus on documents, collections, queries, aggregation, indexes, schema design
  - _Requirements: 1.1, 1.2, 2.1, 3.1, 3.2, 4.1, 4.2, 5.1-5.8, 8.1-8.6_

- [x] 5.3 Wire MySQL, MongoDB to app and commit


  - Add imports to src/data/flashcards/index.js
  - Add imports to src/data/mcqs/index.js
  - Run git add . && git commit -m "feat: Add MySQL and MongoDB content - Task 5 complete" && git push origin master
  - _Requirements: 4.6_
-

- [ ] 6. Create Medium topic content files (Java/JEE, Spring/Hibernate)

- [x] 6.1 Create Java/JEE flashcards and MCQs


  - Create src/data/flashcards/java-jee.js with 30-35 flashcards
  - Create src/data/mcqs/java-jee.js with 20-22 MCQs
  - Follow 50% Base, 35% Junior, 15% Intermédiaire distribution
  - Focus on Java syntax, OOP, collections, exceptions, JEE basics
  - _Requirements: 1.3, 1.4, 2.1, 3.1, 3.2, 4.1, 4.2, 5.1-5.8, 8.1-8.6_

- [x] 6.2 Create Spring/Hibernate flashcards and MCQs


  - Create src/data/flashcards/spring-hibernate.js with 30-35 flashcards
  - Create src/data/mcqs/spring-hibernate.js with 20-22 MCQs
  - Follow 50% Base, 35% Junior, 15% Intermédiaire distribution
  - Focus on dependency injection, Spring Boot, annotations, Hibernate ORM, JPA
  - _Requirements: 1.3, 1.4, 2.1, 3.1, 3.2, 4.1, 4.2, 5.1-5.8, 8.1-8.6_

- [-] 6.3 Wire Java/JEE, Spring/Hibernate to app and commit

  - Add imports to src/data/flashcards/index.js
  - Add imports to src/data/mcqs/index.js
  - Run git add . && git commit -m "feat: Add Java/JEE and Spring/Hibernate content - Task 6 complete" && git push origin master
  - _Requirements: 4.6_

- [ ] 7. Create Medium topic content files (Angular, jQuery)

- [ ] 7.1 Create Angular flashcards and MCQs
  - Create src/data/flashcards/angular.js with 30-35 flashcards
  - Create src/data/mcqs/angular.js with 20-22 MCQs
  - Follow 50% Base, 35% Junior, 15% Intermédiaire distribution
  - Focus on components, directives, services, TypeScript, lifecycle hooks, data binding
  - _Requirements: 1.3, 1.4, 2.1, 3.1, 3.2, 4.1, 4.2, 5.1-5.8, 8.1-8.6_

- [ ] 7.2 Create jQuery flashcards and MCQs
  - Create src/data/flashcards/jquery.js with 30-35 flashcards
  - Create src/data/mcqs/jquery.js with 20-22 MCQs
  - Follow 50% Base, 35% Junior, 15% Intermédiaire distribution
  - Focus on selectors, DOM manipulation, events, AJAX, common methods
  - _Requirements: 1.3, 1.4, 2.1, 3.1, 3.2, 4.1, 4.2, 5.1-5.8, 8.1-8.6_

- [ ] 7.3 Wire Angular, jQuery to app and commit
  - Add imports to src/data/flashcards/index.js
  - Add imports to src/data/mcqs/index.js
  - Run git add . && git commit -m "feat: Add Angular and jQuery content - Task 7 complete" && git push origin master
  - _Requirements: 4.6_

- [ ] 8. Create Grouped topic content files (Mobile, DevOps-tools)

- [ ] 8.1 Create Mobile flashcards and MCQs
  - Create src/data/flashcards/mobile.js with 35-40 flashcards
  - Create src/data/mcqs/mobile.js with 22-25 MCQs
  - Follow 55% Base, 30% Junior, 15% Intermédiaire distribution
  - Cover Android/Kotlin (9-10 flashcards, 5-6 MCQs), iOS/Swift (9-10 flashcards, 5-6 MCQs), React Native (9-10 flashcards, 6-7 MCQs), Flutter/Dart (8-10 flashcards, 6-7 MCQs)
  - _Requirements: 1.5, 1.6, 2.2, 3.1, 3.2, 4.1, 4.2, 5.1-5.8, 6.1, 6.5, 8.1-8.6_

- [ ] 8.2 Create DevOps-tools flashcards and MCQs
  - Create src/data/flashcards/devops-tools.js with 35-40 flashcards
  - Create src/data/mcqs/devops-tools.js with 22-25 MCQs
  - Follow 55% Base, 30% Junior, 15% Intermédiaire distribution
  - Cover Kubernetes (10-12 flashcards, 7-8 MCQs), Jenkins (8-10 flashcards, 5-6 MCQs), SonarQube (8-9 flashcards, 5-6 MCQs), RabbitMQ (9-10 flashcards, 5-6 MCQs)
  - _Requirements: 1.5, 1.6, 2.2, 3.1, 3.2, 4.1, 4.2, 5.1-5.8, 6.2, 6.5, 8.1-8.6_

- [ ] 8.3 Wire Mobile, DevOps-tools to app and commit
  - Add imports to src/data/flashcards/index.js
  - Add imports to src/data/mcqs/index.js
  - Run git add . && git commit -m "feat: Add Mobile and DevOps-tools content - Task 8 complete" && git push origin master
  - _Requirements: 4.6_

- [ ] 9. Create Grouped topic content files (Security-Networking, Fundamentals)

- [ ] 9.1 Create Security-Networking flashcards and MCQs
  - Create src/data/flashcards/security-networking.js with 35-40 flashcards
  - Create src/data/mcqs/security-networking.js with 22-25 MCQs
  - Follow 55% Base, 30% Junior, 15% Intermédiaire distribution
  - Cover Cybersecurity (18-20 flashcards, 11-13 MCQs) and Networking (17-20 flashcards, 11-12 MCQs)
  - _Requirements: 1.5, 1.6, 2.2, 3.1, 3.2, 4.1, 4.2, 5.1-5.8, 6.3, 6.5, 8.1-8.6_

- [ ] 9.2 Create Fundamentals flashcards and MCQs
  - Create src/data/flashcards/fundamentals.js with 35-40 flashcards
  - Create src/data/mcqs/fundamentals.js with 22-25 MCQs
  - Follow 55% Base, 30% Junior, 15% Intermédiaire distribution
  - Cover Computer Science (10-12 flashcards, 6-7 MCQs), Systems (9-10 flashcards, 5-6 MCQs), Logic (8-10 flashcards, 5-6 MCQs), IT Concepts (8-10 flashcards, 6-7 MCQs)
  - _Requirements: 1.5, 1.6, 2.2, 3.1, 3.2, 4.1, 4.2, 5.1-5.8, 6.4, 6.5, 8.1-8.6_

- [ ] 9.3 Wire Security-Networking, Fundamentals to app and commit
  - Add imports to src/data/flashcards/index.js
  - Add imports to src/data/mcqs/index.js
  - Run git add . && git commit -m "feat: Add Security-Networking and Fundamentals content - Task 9 complete" && git push origin master
  - _Requirements: 4.6_

- [ ] 10. Update index files and remove deprecated content

- [ ] 10.1 Remove deprecated content files
  - Delete src/data/flashcards/databases.js
  - Delete src/data/flashcards/backend.js
  - Delete src/data/flashcards/devops.js
  - Delete src/data/mcqs/databases.js
  - Delete src/data/mcqs/backend.js
  - Delete src/data/mcqs/devops.js
  - _Requirements: 4.7_

- [ ] 10.2 Update index files to remove deprecated imports

  - Remove imports for databases.js, backend.js, devops.js from src/data/flashcards/index.js
  - Remove imports for databases.js, backend.js, devops.js from src/data/mcqs/index.js
  - _Requirements: 4.6_

- [ ] 10.3 Commit cleanup changes

  - Run git add . && git commit -m "chore: Remove deprecated content files - Task 10 complete" && git push origin master
  - _Requirements: 4.6, 4.7_

- [ ] 11. Expand keyword comparison maps

- [ ] 11.1 Add frontend framework comparison maps
  - React vs Angular vs Vue (comprehensive comparison)
  - jQuery vs Vanilla JavaScript
  - HTML vs JSX syntax
  - Bootstrap vs Tailwind vs vanilla CSS
  - _Requirements: 9.1, 9.3, 9.4, 9.6, 9.7_

- [ ] 11.2 Add backend framework comparison maps
  - Express vs Laravel vs Spring Boot (routing, middleware, ORM)
  - PHP vs Node.js (language features)
  - _Requirements: 9.1, 9.3, 9.4, 9.6, 9.7_

- [ ] 11.3 Add database and language comparison maps
  - SQL vs NoSQL (general concepts)
  - JavaScript vs TypeScript
  - Java vs Kotlin
  - PHP 7.x vs PHP 8.x features
  - _Requirements: 9.1, 9.3, 9.4, 9.6, 9.7_

- [ ] 11.4 Add mobile and testing comparison maps
  - Kotlin vs Swift (syntax comparison)
  - Unit vs Integration vs E2E testing
  - _Requirements: 9.1, 9.3, 9.4, 9.6, 9.7_

- [ ] 11.5 Add security and networking comparison maps
  - Authentication vs Authorization
  - Symmetric vs Asymmetric encryption
  - HTTP vs HTTPS
  - TCP vs UDP
  - REST vs GraphQL
  - _Requirements: 9.1, 9.3, 9.4, 9.6, 9.7_

- [ ] 11.6 Commit comparison maps
  - Run git add . && git commit -m "feat: Add comprehensive keyword comparison maps - Task 11 complete" && git push origin master
  - _Requirements: 9.1, 9.3, 9.4, 9.6, 9.7_

- [ ] 12. Final validation and testing
- [ ] 12.1 Validate content structure and IDs
  - Verify all composite IDs follow correct format
  - Check difficulty distributions match targets
  - Confirm volume targets are met for all topics
  - _Requirements: 5.1, 5.2, 2.1, 2.2, 1.1-1.6_

- [ ] 12.2 Test application integration
  - Load application and verify all topics appear in filters
  - Test flashcard display and flip functionality
  - Test MCQ single-select and multi-select functionality
  - Test keyword maps render correctly
  - Test review tracking with new content
  - _Requirements: 5.3, 5.4, 5.5, 5.6, 5.7_

- [ ] 12.3 Content quality review
  - Verify technical accuracy of questions and answers
  - Check French grammar and technical term usage
  - Confirm explanations clarify both correct and incorrect answers
  - Ensure QCM optimization strategies are applied
  - _Requirements: 3.1-3.7, 8.1-8.6_
