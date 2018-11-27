const express = require('express');
const mysql = require('mysql');

const app = express();


// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'me',
//     password : 'secret',
//     database : 'my_db'
//   });
const db = mysql.createConnection({
    host : 'localhost',
    user: 'richard',
    password: '1234',
    database : 'my_db'
});


db.connect((err) => {
    // if(err){
    //     throw err;
    // }
    console.log('MySql Connected')
})



app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE mysqltest';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    })
})

app.listen('3000', () => {
    console.log('Server started on port 3000')
})