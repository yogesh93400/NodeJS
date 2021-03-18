let express = require("express");
//import cors module
let cors = require("cors");
//import body-parser module
let bodyparser = require("body-parser");

//create rest object
let app = express();
//enable the cors policy
app.use(cors());
//set the Json as MIME Type
app.use(bodyparser.json());
//parse the json
app.use(bodyparser.urlencoded({extended:false}));
//use the fetch module
app.use("/fetch",require("./fetch/fetch"));
app.use("/insert",require("./insert/insert"));
app.use("/update",require("./update/update"));
app.use("/remove",require("./delete/delete"));

//assign the port number 
app.listen(8080,()=>{
    console.log("Server started successfully");
});
