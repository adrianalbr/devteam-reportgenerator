//Internal modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const questions = require('../questions');
const render = require("./lib/htmlRenderer");

// Packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//??
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


+// Array of employees

const employees = [];

//create manager object

function createManager() {

    let managerResponses = inquirer.prompt(questions.manager);
        let newManager = new Manager
            (managerResponses.mgrName, managerResponses.mgrId, managerResponses.mgrEmail, managerResponses.mgrOffice);

            employees.push(newManager);

            console.log("You have created a new manager:", newManager);


};

function confirmEmployee() {

    let confirmEmployee = inquirer.prompt(question.create);

    switch (confirmEmployee.confirmEmp){
        case false:
            console.log("Here is your team so far: ",employees);
            console.log("your page is being generated");
            return;
        case true:
            createEmployee();
    };
};

// Create Engineer or Intern
function createEmployee() {

    // add an Engineer or Intern?
    let employeeRole = inquirer.prompt(questions.employee);

    switch (employeeRole.empRole) {
        case 'Engineer':
            let engResponses = inquirer.prompt(questions.engineer);
            let newEngineer = new Engineer
                (engResponses.engName,
                    engResponses.engId,
                    engResponses.engEmail,
                    engResponses.engGithub);
            employees.push(newEngineer);
            console.log("New engineer has been added to the team: ", newEngineer);
            confirmEmployee();

        case 'Intern':
            let internResponses = inquirer.prompt(questions.intern);
            let newIntern = new Intern
                (internResponses.internName,
                    internResponses.internId,
                    internResponses.internEmail,
                    internResponses.internSchool);
            employees.push(newIntern);
            console.log("New intern has been added to the team: ", newIntern);
            confirmEmployee();
    };

};

//Main function init

function init() {

    createManager();
    confirmEmployee();

};

init();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
