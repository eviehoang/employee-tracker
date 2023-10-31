// prompts to ask for employee information on the menu
// Presented with the following options: view all departments, view all roles, view all employees, 
// add a department, add a role, add an employee, and update an employee role
const inquirer = require('inquirer');
const main = require("./index")

const menu = [{
    type: "list",
    name: "options",
    message: "What would you like to do? (Use Arrow Keys)",
    choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add Departments",
        "Add Role",
        "Add Employee",
        "Update Employee Role",
        "Quit",
    ]
}]


module.exports = { menu};
