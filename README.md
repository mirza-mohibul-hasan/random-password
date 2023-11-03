# Random Password Generator

Generate strong, random passwords with the 'Random Password Generator' npm package. Easily customize criteria, choose complexity levels, and enhance security. Simplify password creation for your projects with a user-friendly API.

## Installation

You can install the 'Random Password Generator' npm package using npm or yarn:

```sh
npm install @mohibul-refat/random-password
# OR
yarn add @mohibul-refat/random-password
```
## Usage
To use the 'Random Password Generator' in your JavaScript or Node.js project, require it and call the generatePassword function.
```sh
const generatePassword = require('@mohibul-refat/random-password');

// Generate a random password with the default length (8 characters)
const password = generatePassword();
console.log(password);

// Generate a random password with a specific length (e.g., 12 characters)
const customPassword = generatePassword(12);
console.log(customPassword);
```
By default, if you don't specify a length, the function will generate an 8-character password. You can customize the length by passing an integer as an argument to generatePassword.

## Contributing
