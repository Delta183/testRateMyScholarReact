const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'us-cdbr-east-03.cleardb.com', //us-cdbr-east-03.cleardb.com
    user: 'b277c48dc5a180', //b277c48dc5a180
    password: '4ba00385', //4ba00385
    database: 'heroku_a307c0ce0eb4d98',//heroku_a307c0ce0eb4d98
    //port: 3306,
});



app.get('/', (req, res) =>{
    
    //const sqlInsert = "INSERT INTO `accounts` (user_Name, pass_Word, email) VALUES ('7777777','7777777', '7777777');";
    //"INSERT INTO `accounts` (user_Name, pass_Word, email) VALUES ('555555','555555', '555555');";
});

app.listen(3001, () => {
    console.log('running on port 3001 and dealie');
});