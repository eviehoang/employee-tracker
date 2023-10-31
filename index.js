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
    }).then(response => {
        let choice = response.options;
        switch (choice) {
            case "View All Departments":
                return viewDept();
            case "View All Roles":
                return viewRoles();
                break;
        }
    })
        .catch(err => {
            console.log(err);
        });
};

function viewDept() {
    db.query('SELECT department_name FROM company_db.departments;', function (err, results) {
        if (err) {
            console.error(err);
        } else {
            console.table(results);
            
        }
    });
}
function viewRoles() {
    db.query('SELECT id, title, salary, FROM company_db.roles;', function (err, results) {
        if (err) {
            console.error(err);
        } else {
            console.table(results);
        }
    });
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
