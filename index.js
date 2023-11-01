// Import and require mysql2
const mysql = require('mysql2');
// figlet for ascii images
const figlet = require('figlet');
// prompts
const prompts = require('./prompts');
const inquirer = require('inquirer');


// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'company_db'
    },
    console.log(`Connected to company_db database.`)
);

// Menu and Ascii Artwork

function banner() {
    return new Promise((resolve, reject) => {
        figlet.text("FISH-SEA CO.", {
            font: "Bubble"
        }, function (err, data) {
            if (err) {
                console.log("Something went wrong...");
                console.dir(err);
                reject(err);
            } else {
                console.log(data);
                resolve();
            }
        });
    });
}

const sharky =
    `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀EMPLOYEE DATABASE⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⡾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡞⠋⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠃⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⠶⣿⠟
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⢏⡀⠀⠀⠀⠸⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⢠⡾⠃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⠶⠶⠛⠛⠋⠉⠉⠀⠀⠀⠀⠈⠛⠿⠶⠶⠤⣤⣤⣄⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⣠⡞⠋⠀⣰⠟⠀⠀⠀
⠀⠀⠀⣀⣠⡴⠶⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠛⠓⠶⢦⣤⣴⡞⠋⠀⢀⣼⠋⠀⠀⠀⠀
⣠⡴⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠁⠀⣾⠁⠀⠀⠀⠀⠀
⠛⠷⠦⢤⣤⡴⠖⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢦⡀⠀⠀⠀⣀⣀⣤⣤⡴⠶⢿⣄⠀⠀⢿⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠙⠛⠳⠶⠶⢤⣤⣤⣤⣀⣀⣀⣀⣤⣤⣞⡀⠀⠀⠸⣟⠛⠛⠛⠛⠛⠷⣤⣄⣟⠁⠀⠀⠀⠀⠀⠙⢷⣄⠘⣧⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠳⣶⣦⣽⣷⣄⠀⠀⠀⠀⠀⠈⠙⠀⠀⠀⠀⠀⠀⠀⠀⠙⢷⣿⡆⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀EMPLOYEE DATABASE⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`

function shark() {
    console.log(sharky);
};


// Function for choices made
const choices = function () {
    inquirer.prompt(prompts.menu).catch(err => {
        console.log(err);
    }).then(async response => {
        let choice = response.options;
        console.log(choice);
        switch (choice) {
            case "View All Departments":
                return viewDept();
            case "View All Roles":
                return viewRoles();
            case "View All Employees":
                return viewEmp();
            case "Add Departments":
                return await addDept();
            case "Add Role":
                return await addRole();
            case "Add Employee":
                return await addEmp();
            case "Update Employee Role":
                return await updateEmp();
            case "Delete Employee":
                return await deleteEmployeePrompt();
            case "Quit":
                return db.end();
                break;
        }
    })
        .catch(err => {
            console.log(err);
        });
};


// Back to menu and exit options
function backOpt() {
    return inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "What would you like to do?",
            choices: [
                "Back",
                "Quit"
            ]
        }
    ]);
}

const back = function () {
    backOpt()
        .then(response => {
            if (response.options === "Back") {
                choices();
            } else {
                return db.end();
            }
        })
        .catch(err => {
            console.error(err);
        });
};





// View All Dept. Roles, and Employees
function viewDept() {
    db.query('SELECT department_name FROM company_db.departments;', function (err, results) {
        if (err) {
            console.error(err);
        } else {
            console.table(results);
            back();
        }
    });
}
function viewRoles() {
    db.query('SELECT title, salary, department_id FROM company_db.roles;', function (err, results) {
        if (err) {
            console.error(err);
        } else {
            console.table(results);
            back();
        }
    });
}
function viewEmp() {
    db.query('SELECT emp_id, first_name, last_name, role_id, manager_id FROM company_db.employees;', function (err, results) {
        if (err) {
            console.error(err);
        } else {
            console.table(results);
            back();
        }
    });
};




// Add Dept, Role, or Employee
async function addDept() {
    const dept = await inquirer.prompt([
        {
            type: "input",
            name: "department_name",
            message: "What is the name of the new department?",
        }
    ]);
    await db.promise().query("INSERT INTO company_db.departments SET ?", dept);
    viewDept();
}

async function addRole() {
    const dept = await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the name of the new role?",
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary of the new role?",
        },
        {
            type: "input",
            name: "department_id",
            message: "What is the department_id for the role?",
        }
    ]);
    await db.promise().query("INSERT INTO company_db.roles SET ?", dept);
    viewRoles();
}

async function addEmp() {
    const dept = await inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the new employee's first name?",
        },
        {
            type: "input",
            name: "last_name",
            message: "What is their last name?",
        },
        {
            type: "input",
            name: "role_id",
            message: "What is their role's id?",
        },
        {
            type: "input",
            name: "manager_id",
            message: "What is their manager's id?",
        },
        {
            type: "input",
            name: "emp_id",
            message: "What is their employee id?",
        }
    ]);
    await db.promise().query("INSERT INTO company_db.employees SET ?", dept);
    viewEmp();
};




// Update Employee Role
async function getEmployees() {
    return new Promise((resolve, reject) => {
        db.query('SELECT emp_id, first_name, last_name FROM company_db.employees;', (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}
async function getRoles() {
    return new Promise((resolve, reject) => {
        db.query('SELECT id, title FROM company_db.roles;', (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}
async function updateEmployeeRole(employeeId, newRoleId) {
    return new Promise((resolve, reject) => {
        db.query(
            'UPDATE company_db.employees SET role_id = ? WHERE emp_id = ?',
            [newRoleId, employeeId],
            (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            }
        );
    });
}

async function updateEmp() {
    try {
        // Get a list of employees and roles from the database
        const employees = await getEmployees()
        const roles = await getRoles();

        // Create choices for Inquirer prompts
        const employeeChoices = employees.map(({ emp_id, first_name, last_name }) => ({
            name: `${first_name} ${last_name}`,
            value: emp_id,
        }));

        const roleChoices = roles.map(({ id, title }) => ({
            name: title,
            value: id,
        }));

        // Prompt the user to select an employee and a new role
        const updateData = await inquirer.prompt([
            {
                type: "list",
                name: "employeeId",
                message: "Select the employee to update:",
                choices: employeeChoices,
            },
            {
                type: "list",
                name: "newRoleId",
                message: "Select the new role for the employee:",
                choices: roleChoices,
            },
        ]);

        // Update the employee's role in the database
        async function updateEmployeeRole(employeeId, newRoleId) {
            return new Promise((resolve, reject) => {
                db.query(
                    'UPDATE company_db.employees SET role_id = ? WHERE emp_id = ?',
                    [newRoleId, employeeId],
                    (err, results) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(results);
                        }
                    }
                );
            });
        }
        await updateEmployeeRole(updateData.employeeId, updateData.newRoleId);

        console.log("\n Employee role updated successfully. \n");
        viewEmp();

    } catch (error) {
        console.error("An error occurred:", error);
    }
};


// Delete Employee
// Define the deleteEmployee function
async function deleteEmployee(employeeId) {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM company_db.employees WHERE emp_id = ?', employeeId, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

// Add a new function to prompt the user to select an employee for deletion
async function deleteEmployeePrompt() {
    const employees = await getEmployees();

    const employeeChoices = employees.map(({ emp_id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: emp_id,
    }));

    const deleteData = await inquirer.prompt([
        {
            type: "list",
            name: "employeeId",
            message: "Select the employee to delete:",
            choices: employeeChoices,
        },
    ]);

    await deleteEmployee(deleteData.employeeId);
    console.log("Employee deleted successfully.");
    viewEmp();
}




// Launching Everything
async function start() {
    try {
        await banner();
        shark();
        choices();
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

start();
