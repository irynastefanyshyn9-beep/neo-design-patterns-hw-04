Implementation of three creational design patterns in TypeScript.

Patterns

Singleton — `AppConfigService` ensures a single shared configuration instance across the entire application.
Builder — `DocumentBuilder` assembles structured text documents step-by-step using a fluent interface.
Prototype — `UserProfile` supports deep cloning so user profiles can be duplicated independently.

Project Structure

src/
├── singleton/
│   ├── AppConfigService.ts
│   └── main.ts
├── builder/
│   ├── DocumentBuilder.ts
│   └── main.ts
└── prototype/
    ├── UserProfilePrototype.ts
    ├── UserProfile.ts

Setup
npm install

Running

npx ts-node src/singleton/main.ts
npx ts-node src/builder/main.ts
npx ts-node src/prototype/main.ts
