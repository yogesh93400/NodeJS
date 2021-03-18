let conn = require("../config/db_connection");
let connection = conn.getConnection();
let express = require("express");

let update = express.Router().put("/",(req,res)=>{
    connection.query(`update employees set e_name = '${req.body.e_name}',e_sal = ${req.body.e_salary} where e_id=${req.body.e_id}`,(err,result)=>{
        if(err) throw err;
        else{
            res.send({update:"success"});
        }
    });
});

module.exports = update;