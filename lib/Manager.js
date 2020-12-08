const Employee = require("./Employee");

// Define Manager class which extends Employee class along with the officeNumber property and getOfficeNumber & getRole method. 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    
    getOfficeNumber () {
        return this.officeNumber;
    }

    getRole () {
        return "Manager";
    }

}

module.exports = Manager;