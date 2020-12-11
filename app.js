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

function createManager () {

    inquirer.prompt ([

        {
            type: 'input',
            message: 'What is the name of the manager?',
            name: 'managerName',
        },
    
        {
            type: 'input',
            message: 'What is the id for the manager?',
            name: 'managerId',
        },

        {
            type: 'input',
            message: 'What is the email address for the manager?',
            name: 'managerEmail',
        },
    
        {
            type: 'input',
            message: 'What is the office number for the manager?',
            name: 'managerOfficeNumber',
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
        },
    
        {
            type: 'input',
            message: 'What is the id for the intern?',
            name: 'internId',
        },

        {
            type: 'input',
            message: 'What is the email address for the intern?',
            name: 'internEmail',
        },
    
        {
            type: 'input',
            message: 'What is the name of the school the intern attends?',
            name: 'internSchool',
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
        },
    
        {
            type: 'input',
            message: 'What is the id for the engineer?',
            name: 'engineerId',
        },

        {
            type: 'input',
            message: 'What is the email address for the engineer?',
            name: 'engineerEmail',
        },
    
        {
            type: 'input',
            message: 'What is the GitHub username for the engineer?',
            name: 'engineerGithubUsername',
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

// function to initialize program
function init() {
    inquirer.prompt(managerQuestions)
    .then((response) => {
        console.log(response)
    });
}

// function call to initialize program
createManager();
// addIntern();
// addEngineer();




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
