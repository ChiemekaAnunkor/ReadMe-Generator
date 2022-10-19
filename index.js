// TODO: Include packages needed for this application
// import generateMarkdown from "../utils/generateMarkdown";

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdow = require("../challenge9/utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project? ",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of the project? ",
    name: "description",
  },
  {
    type: "input",
    message: "what are the installation steps?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the usage of your project?",
    name: "usage",
  },
  {
    type: "input",
    message: "What parties contributed to this project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What are the testing steps/code?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your github username?  ",
    name: "username",
  },
  {
    type: "input",
    message: "What is your complete email address?  ",
    name: "email",
  },
  {
    type: "list",
    message: "What liscence would you like  ",
    name: "license",
    choices: ["MIT", "Apache-2.0", "BSD-3-Clause"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  inquirer.prompt(questions).then((data) => {
    console.log(data.title);
    fs.writeFile("readme/README.md", generateMarkdow(data), (err) => {
      err ? console.log(err) : console.log("sucess");
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  writeToFile();
}

// Function call to initialize app
init();
