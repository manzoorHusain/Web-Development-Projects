const express = require("express")
const bodyParser = require("body-parser")
const { urlencoded } = require("body-parser")
const app = express()

const date = require(__dirname + "/date.js")

app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", function (req, res) {
    console.log(date.fun());
    console.log(date.baz());
    //console.log(fun());
    res.send(date.fun() + date.baz())
})



app.listen(1000, function(){
    console.log("Port 1000 started");
})