let express = require("express");
let conn = require("../config/db_connection");
let connection = conn.getConnection();

let insert = express.Router().post("/",(req,res)=>{
    connection.query(`insert into employees values(${req.body.e_id},'${req.body.e_name}',${req.body.e_salary})`,(err,result)=>{
        if(err) throw err;
        else{
            res.send({insert:"success"});
        }
    });
});
module.exports = insert;