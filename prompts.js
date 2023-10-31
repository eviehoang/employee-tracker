// prompts to ask for employee information on the menu
// Presented with the following options: view all departments, view all roles, view all employees, 
// add a department, add a role, add an employee, and update an employee role
const inquirer = require('inquirer');

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


function backOpt() {
    return inquirer.createPromptModule([
        {
            type: "list",
            name: "options",
            message: "What would you like to do?",
            choices: [
                "Back",
                "Quit",]
        },
    ]);
}
module.exports = { menu, backOpt };
