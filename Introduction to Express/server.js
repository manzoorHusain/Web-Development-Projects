// console.log("It is Working!")

// alert('hello');
const express = require("express")
const app = express();

app.get("/",function (request,response) { // "/" means home route // request and response varibales are not constan , changeable
    //console.log(request);
   // response.send("hello");  
    response.send('<h1>Hello World</h1>') // We can't use send() two times. giving us an error
})

app.get("/contact", function (req, res){
    res.send("manzoor@gmail.com")
})

app.get("/about", function (req, res){
    res.send("I'm Manzoor Hussain")
})

app.get("/about/country", function (req, res){
    res.send("Pakistan")
})
app.listen(3000,function name(params) {
    console.log("server started")
})