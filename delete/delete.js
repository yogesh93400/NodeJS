let conn = require("../config/db_connection");
let connection = conn.getConnection();
let express = require("express");

let remove = express.Router().delete("/",(req,res)=>{
    connection.query(`delete from employees where e_id = ${req.body.e_id}`,(err,result)=>{
        if(err) throw err;
        else{
            res.send({delete:"success"});
        }
    });
});

module.exports = remove;