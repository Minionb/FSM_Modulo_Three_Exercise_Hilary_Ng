# FSM - Modulo Three Exercise (Standard Exercise)
This project implements a Finite State Machine (FSM) in TypeScript that calculates the remainder when a binary number is divided by 3 — i.e., modulo-3 of binary input. It demonstrates key software design principles such as encapsulation, abstraction, and testability, using an object-oriented programming approach and test cases with Jest.

## Project Structure
📦 project-root  
├── 📂 node_modules/  
├── 📂 src/  
│   ├── 📂 fsm/  
│   │   ├── 📄 ModuloThree.ts  
│   │   ├── 📄 State.ts  
│   │   ├── 📄 StateMachine.ts  
│   ├── 📄 index.ts  
├── 📂 tests/  
│   ├── 📄 ModuloThree.test.ts  
│   ├── 📄 StateMachine.test.ts  
├── 📄 .gitignore  
├── 📄 jest.config.js  
├── 📄 package-lock.json  
├── 📄 package.json  
├── 📄 ReadMe.md  
├── 📄 tsconfig.json  

 <br>
This structure follows a clean separation of concerns:

src/index.ts → main file that start the program (with output for example input "110" & "1010")

src/fsm/ → Core FSM logic.

tests/ → Unit tests for FSM components.

Root files → Config files for TypeScript (tsconfig.json), Jest (jest.config.js), and project dependencies (package.json).

## Running the Project

1. Install Dependencies
```
npm install
```

 <br>
2. Run the Program

```
cd src
npx ts-node index.ts
```

## Running Tests

```
npm run test
```

 <br>
 Tests are written using Jest and cover the logic for ModuloThree and StateMachine with:

1. Valid modulo 3 calculations

2. Edge cases (empty input, single digits)

3. Invalid input and transitions

## Design Highlights
1. Encapsulation: Each class handles a single responsibility:
-> State : Representing a state in FSM with two private properties: name and value
-> StateMachine : Managing state and its transition
-> ModuloThree : Define business logic, the required state and transition for the FSM system

2. OOP Approach: Easy to extend with more states or different FSM logic

3. Test Coverage: Ensures FSM logic is expected and predictable

4. Custom Error Handling: For invalid inputs and duplicate transitions

