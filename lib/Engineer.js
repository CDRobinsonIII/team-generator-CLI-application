const Employee = require("./Employee");

// Define Engineer class which extends Employee class along with the GitHub user name property and getGitHub & getRole method. 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
    
    getGithub () {
        return this.github;
    }

    getRole () {
        return "Engineer";
    }

}

module.exports = Engineer;