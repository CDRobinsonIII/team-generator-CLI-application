const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];
const idArray = [];

const responseValidation = function (input) {
    if (input === "") {
        console.log("Please provide a valid response.");
        return false;
    }

    return true;
};

const idValidation = function (input) {
    if (idArray.includes(input)) {
        console.log("That id is already being used. Please entered another id.");
        return false;
    }
    return true;
};

function createManager () {

    inquirer.prompt ([

        {
            type: 'input',
            message: 'What is the name of the manager?',
            name: 'managerName',
            validate: responseValidation,   
        },
    
        {
            type: 'input',
            message: 'What is the id for the manager?',
            name: 'managerId',
            validate: responseValidation,   
        },

        {
            type: 'input',
            message: 'What is the email address for the manager?',
            name: 'managerEmail',
            validate: responseValidation,   
        },
    
        {
            type: 'input',
            message: 'What is the office number for the manager?',
            name: 'managerOfficeNumber',
            validate: responseValidation,   
        }
    ])
    .then((answers) => {
        const manager = new Manager (answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);

        teamMembers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
    })
}

function addIntern () {

    inquirer.prompt ([

        {
            type: 'input',
            message: 'What is the name of the intern?',
            name: 'internName',
            validate: responseValidation,   
        },
    
        {
            type: 'input',
            message: 'What is the id for the intern?',
            name: 'internId',
            validate: idValidation,
        },

        {
            type: 'input',
            message: 'What is the email address for the intern?',
            name: 'internEmail',
            validate: responseValidation,   
        },
    
        {
            type: 'input',
            message: 'What is the name of the school the intern attends?',
            name: 'internSchool',
            validate: responseValidation,   
        }
    ])
    .then((answers) => {
        const intern = new Intern (answers.internName, answers.internId, answers.internEmail, answers.internSchool);

        teamMembers.push(intern);
        idArray.push(answers.internId);
        createTeam();
    })
}

function addEngineer () {

    inquirer.prompt ([

        {
            type: 'input',
            message: 'What is the name of the engineer?',
            name: 'engineerName',
            validate: responseValidation,   
        },
    
        {
            type: 'input',
            message: 'What is the id for the engineer?',
            name: 'engineerId',
            validate: idValidation,
        },

        {
            type: 'input',
            message: 'What is the email address for the engineer?',
            name: 'engineerEmail',
            validate: responseValidation,   
        },
    
        {
            type: 'input',
            message: 'What is the GitHub username for the engineer?',
            name: 'engineerGithubUsername',
            validate: responseValidation,   
        }
    ])
    .then((answers) => {
        const engineer = new Engineer (answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithubUsername);

        teamMembers.push(engineer);
        idArray.push(answers.engineerId);
        createTeam();
    })
}

function createTeam () {
    inquirer.prompt ([

        {   type: 'list',
            name: 'employeeType',
            message: 'Which type of team member would you like to add?',
            choices: [
                'Intern',
                'Engineer',
                "I'm done adding team members."
            ]
        }
    ])
    .then((answer) => {
        switch (answer.employeeType) {
            case "Intern":
                addIntern();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "I'm done adding team members.":
                fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
                break;
        }
    })
}

// Function call to initialize program.
createManager();

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


