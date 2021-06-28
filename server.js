const express = require("express");

const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT|| 8080;

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine" , "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(Port, ()=>{
    console.log(`Sever listening on: http://localhost${PORT}`)
})