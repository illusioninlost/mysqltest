const express = require('express');
const mysql = require('mysql');

//Create connection
const db = mysql.createConnection({
    host : 'localhost',
    user: 'richard',
    password: '1234',
    database : 'mysqltest'
});

//Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...')
})

const app = express();


//Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE mysqltest';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

app.listen('3000', () => {
    console.log('Server started on port 3000')
});





// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'me',
//     password : 'secret',
//     database : 'my_db'
//   });


// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'me',
//   password : 'secret',
//   database : 'my_db',
//   socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
// });
 
// connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
// connection.end();