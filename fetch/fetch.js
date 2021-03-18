let express = require("express");

let conn = require("../config/db_connection");
let connection = conn.getConnection();


let fetch = express.Router().get("/",(req,res)=>{
    connection.query('select * from employees',(err,records,fields)=>{
        if(err) throw err;
        else{
            res.send(records)
        }
    });
});
module.exports = fetch;