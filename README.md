# Decision Tree Backend

This repository implements a decision tree processing backend in TypeScript. It enables defining and executing business logic tailored to specific needs.

## Features

- **Decision Tree Definition:** Create decision trees using a JSON format.
- **Node Types:** Supports various node types, including:
    - **Condition:** Evaluate JavaScript expressions and branch based on the result.
    - **Action:** Execute predefined actions, such as sending SMS or email (placeholder implementations are provided).
    - **Loop:**  Repeat a subtree for a specified number of iterations.
    - **DoNothing:** Represents an empty branch for conditions.
- **Action Extensibility:** Easily add new action types by defining them in the `actions/actions.ts` file.
- **Serialization & Deserialization:** Supports serializing and deserializing decision trees to/from JSON format.
- **Error Handling:** Includes basic error handling for unknown action types and invalid JSON input.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/perez-carlos/decision-tree-backend
   ```

2. **Navigate to the project directory:**
   ```bash
   cd decision-tree-backend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

   This will compile the TypeScript code and start the Node.js server.

## Example Decision Trees

The project includes example decision trees in the `root` directory:

- `christmas-tree.json`:  Sends an SMS on January 1st, 2025.
- `email-sms-tree.json`:  Sends an email
- `optional-emails-tree.json`: Loops 10 times and sends an SMS if a random condition is met.

## Running the Examples

1. **Make sure you have the example JSON files in the `root` directory.**
2. **Run the server with `npm run dev`.**
3. **The console output will show the results of the executed actions.**

## Extending the Backend

- **Add New Actions:** Define new actions in `actions/actions.ts`. Remember to implement the `execute` function for each action.
- **Modify Node Types:** You can introduce new node types as needed to handle more complex decision-making scenarios.
- **Enhance Error Handling:** Implement more robust error handling for potential failures, invalid input, and unexpected conditions.


