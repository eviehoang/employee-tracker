// const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
// figlet for ascii images
const figlet = require('figlet');

// const PORT = process.env.PORT || 3001;
// const app = express();

// // // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // Connect to database
// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'employees_db'
//   },
//   console.log(`Connected to employees_db database.`)
// );

figlet.text("FISHSEA CO.",{
    font: "Dot Matrix",
}, 

function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });