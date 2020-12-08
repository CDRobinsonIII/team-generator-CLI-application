const Employee = require("./Employee");

// Define Intern class which extends Employee class along with the school property and getSchool & getRole methods. 
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    
    getSchool () {
        return this.school;
    }

    getRole () {
        return "Intern";
    }

}

module.exports = Intern;