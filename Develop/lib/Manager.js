// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email ,officeNumber) {
        super(name, id, email);
        this.role = "Manager";
        this.officeNumber = officeNumber;
    }

    getRole() {
        return this.role;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

const manager = new Manager()
manager.getRole();
manager.getOfficeNumber();

module.exports = Manager;
