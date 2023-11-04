# Random Password Generator

Generate strong, random passwords with the 'Random Password Generator' npm package. Easily customize criteria, choose complexity levels, and enhance security. Simplify password creation for your projects with a user-friendly API.

## Prerequisites

This project requires NodeJS and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Installation

You can install the 'Random Password Generator' npm package using npm or yarn:

```sh
npm install @mohibul-refat/random-password
# OR
yarn add @mohibul-refat/random-password
```
## Usage
To use the 'Random Password Generator' in your JavaScript or Node.js project, require it and call the generatePassword function.
```js
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

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -m 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request to our *main* branch:

## Built With
* JavaScript
* Node.js
* NPM

## Authors

* **Mirza Mohibul Hasan**

## License

[ISC License]() © Mohibul Refat