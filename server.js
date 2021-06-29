const express = require("express");

const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT|| 8080;

app.engine("handlebars", exphbs({extname: "hbs",
defaultLayout: false,
layoutsDir: "views/layouts/"}));
app.set("view engine" , "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let dishes = [
{
    id:1,
    name:"Sushi",
    price: 3.89
},

{
    id:2,
    name:"Chicken Pad Thai",
    price: 5.75
},
{
    id:3,
    name:"Veggie Spring Rolls",
    price: 12.25
},
{
    id:4,
    name:"Pineapple Pizza",
    price: 5.75
},

];
// res.render takes two args string / name of view we want to put in the body second args has to be an object 
// pass in my array of objects by dishes:dishes 
app.get("/", (req, res) =>{
res.render("index", {
    dishes: dishes
})
})

app.listen(PORT, ()=>{
    console.log(`Sever listening on:http://localhost${PORT}`)
})

// 1 view route for all resources 
// 2 view route for a single resource by ID
// 3 view route to add a single resource 
// 4 view route to edit a single resource
// all view methods will be a get method  
// 5 post route to handle incoming data 
// put route to handle incoming data and updating 
// delete route 

//create a views folder 
// inside views create a index.handlebars
// inside views create layouts folder
// inside layouts create a main.handlebars file
// add boiler plate 

// heroku create 
// remote -v 
// git push heroku master 
//