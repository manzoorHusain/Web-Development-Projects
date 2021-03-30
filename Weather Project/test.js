const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")  // This is because we can't know someone else computer repository.
})

app.post("/", function (req, res) { // bmicalculator is not case sensitive.
   // res.send("it is working fine")
   
    res.send("The result is: ")
})

app.listen(2000,function name(params) {
    console.log("server started")
})