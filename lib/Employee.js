// Define Employee class with name, id, email properties and getName, getID, getEmail and getRole methods. 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName () {
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getRole () {
        return "Employee";
    }

}

module.exports = Employee;