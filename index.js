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
            case "Quit":
                return end();
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
            } else if (response.options === "Quit") {
                db.end;
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
}

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
    }
]);
    await db.promise().query("INSERT INTO company_db.employees SET ?", dept);
    viewEmp();
}


// Update Employee Role
async function updateEmp() {
    
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
