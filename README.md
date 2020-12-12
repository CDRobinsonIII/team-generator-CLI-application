# team-generator-CLI-application
![GitHub License](https://img.shields.io/badge/License-MIT-blue) 

## Description 
The mission of this project was to build a software engineering team generator command line application. The user inputs the information for the manager and then the information for the interns and engineers they have on their team. Along with their unique properties and methods, the manager, interns, and engineers inherit the properties and methods from the employee class. After the user inputs the details then a team.HTML page is generated with the details of the team members. 

## Table of Contents
* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Screenshots of README.md Generator in Use](#Screenshots-of-team-generator-CLI-application-in-Use)



## Technologies Used
<ul>
   <li>JavaScript</li> <li>Node JS</li> <li>Classes & Constructors</li> <li>Test-Driven Development with Jest</li>
</ul>

## Installation
To install the team-generator-CLI-application you will have to fork the repository and then clone the repository to your local machine. Once you CD into the directory of the team-generator-CLI-application you will need to run the following command to install the dependencies needed to run the application: 

```
npm install 
```

## Usage 
To run the team-generator-CLI-application after the required modules have been installed with the NPM install command, you will have to enter the following command line: 

```
node app.js
```

Then the user will be prompted with questions about the manager: <ol> <li> What is the name of the manager? </li> <li> What is the id for the manager? </li> <li> What is the email address for the manager? </li> <li> What is the office number for the manager? </ol> 

After the manager's answers are provided, the user has the options to add an intern, an engineer, or finish and generate the team. 

Questions for the interns are: <ol> <li> What is the name of the intern? </li> <li> What is the id for the intern? </li> <li> What is the email address for the intern? </li> <li> What is the name of the school the intern attends?</ol> 

Questions for the engineers are: <ol> <li> What is the name of the engineer? </li> <li> What is the id for the engineer? </li> <li> What is the email address for the engineer? </li> <li> What is the GitHub username for the engineer?</ol> 

Once you are done entering the details for your interns and engineers, select the "I'm done adding team members." option from the menu. Then to proceed to the output folder to view your team.HTML page.

Here is a walkthrough video of the team-generator-CLI-application: https://youtu.be/Bk-W6JhBfcs

## License
This project is licensed under the MIT license.

## Contributing
My goal was to generate the team.HTML and validate the answers provided by the user. The validation proved to be more difficult than I had imagined. I was only able to provide a simple response validation making sure the user at least entered something for an answer and didn’t just hit enter. If they hit enter, they were prompted to provide a valid response.  I was able to provide validation for the employee id. If they entered an id that was already entered, they were prompted to enter another id. The issue I had with the id validation is it didn’t clear the previous id, so the user has to hit backspace before they can enter another id. If you would like to contribute to this repository and help improve it, your contributions would be welcomed. Please contact me via my contact information provided below. 

## Tests
There are tests built into the code to test the employee, manager, intern, and engineer classes. To run the tests for them, in the root directory enter the following command to run the test: 

```
npm run test
```

## Questions
If you have any questions about this team-generator-CLI-application or to report any issues with the application please email me at charlesdalerobinson@gmail.com.
Please visit my github page to review my other repositories: [CDRobinsonIII](https://github.com/CDRobinsonIII)

## Screenshots of team-generator-CLI-application in Use

![Here is a screenshot of CLI after all of the team members were added.](/assets/images/screenshot-cli.jpg)

![Here is a screenshot of generated team.HTML page.](/assets/images/screenshot-teamHTML.jpg)


