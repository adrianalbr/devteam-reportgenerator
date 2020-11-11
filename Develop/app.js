//Internal modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const questions = require("../questions");
const render = require("./lib/htmlRenderer");

// Packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//path
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Array of employees

const employees = [];

//create manager

function createManager() {
  inquirer.prompt(questions.manager).then((managerResponses) => {
    let newManager = new Manager(
      managerResponses.mgrName,
      managerResponses.mgrId,
      managerResponses.mgrEmail,
      managerResponses.mgrOffice
    );

    employees.push(newManager);

    console.log("You have created a new manager:", newManager);
    confirmEmployee();
  });
}

//confirm employee

function confirmEmployee() {
  inquirer.prompt(questions.create).then((confirmEmployee) => {
    switch (confirmEmployee.confirmEmp) {
      case false:
        console.log("Here is your team so far: ", employees);
        console.log("your page is being generated");
        fs.writeFileSync(outputPath, render(employees), "utf-8");
        return;
      case true:
        createEmployee();
    }
  });
}

// Create Engineer or Intern
function createEmployee() {
  // add an Engineer or Intern?
  inquirer.prompt(questions.employee).then((employeeRole) => {
    switch (employeeRole.empRole) {
      case "Engineer":
        inquirer.prompt(questions.engineer).then((engResponses) => {
          let newEngineer = new Engineer(
            engResponses.engName,
            engResponses.engId,
            engResponses.engEmail,
            engResponses.engGithub
          );
          employees.push(newEngineer);
          console.log("New engineer has been added to the team: ", newEngineer);
          confirmEmployee();
        });
        break;
      case "Intern":
        inquirer.prompt(questions.intern).then((internResponses) => {
          let newIntern = new Intern(
            internResponses.internName,
            internResponses.internId,
            internResponses.internEmail,
            internResponses.internSchool
          );
          employees.push(newIntern);
          console.log("New intern has been added to the team: ", newIntern);
          confirmEmployee();
        });
        break;
    }
  });
}

  createManager();
 