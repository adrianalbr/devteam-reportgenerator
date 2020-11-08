// questions for user that is building the team 

//MANAGER QUESTIONS

const managerQuestions = [
    {
        type: 'input',
        message: "This application generates an HTML page for your software development team. A Dev team consists of a manager and any number of engineers and interns. Let's start with a manager - What is your manager's name?",
        name: 'mgrName',
        default: 'Albus Percival Wulfric Brian Dumbledore',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your manager's employee ID?",
        name: 'mgrId',
        default: '007',
        validate: function (answer) {
            if (answer <= 0) {
                return console.log("A valid employee ID is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your manager's email address?",
        name: 'mgrEmail',
        default: 'Albus007@test.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email address is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your manager's office number?",
        name: 'mgrOffice',
        default: '001',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid office number is required.");
            }
            return true;
        }
    },
];

// ASKING TO DEFINE NEXT MEMBER

const confirmEmployee = [
    {
        type: 'confirm',
        message: "Would you like to add another team member to the team?",
        name: 'confirmEmp'
    }
];

const employeeType = [
    {
        type: 'list',
        message: "Would you like to add an Engineer or Intern to the team?",
        choices: ['Engineer', 'Intern'],
        name: 'empRole'
    }
];

// SOFTWARE ENGINEER QUESTIONS

const engineerQuestions = [
    {
        type: 'input',
        message: "What is your software engineer's name?",
        name: 'engName',
        default: 'Harry Potter',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your engineer's employee ID?",
        name: 'engId',
        default: '012',
        validate: function (answer) {
            if (answer <= 0) {
                return console.log("A valid employee ID is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your engineer's email address?",
        name: 'engEmail',
        default: 'harrypotter@test.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email address is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your engineer's GitHub?",
        name: 'engGithub',
        default: 'HarryPotter012',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub is required.");
            }
            return true;
        }
    }
];

// QUESTIONS FOR INTERN

const internQuestions = [
    {
        type: 'input',
        message: "What is your intern's name?",
        name: 'internName',
        default: 'Ron Weasley',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your intern's employee ID?",
        name: 'internId',
        default: '013',
        validate: function (answer) {
            if (answer <= 0) {
                return console.log("A valid employee ID is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your intern's email address?",
        name: 'internEmail',
        default: 'ron.weasley@test.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email address is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your intern's university?",
        name: 'internSchool',
        default: 'hogwarts school of witchcraft and wizardry',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid school is required.");
            }
            return true;
        }
    }
];

module.exports = {
    manager: managerQuestions,
    create: confirmEmployee,
    employee: employeeType,
    engineer: engineerQuestions,
    intern: internQuestions
};