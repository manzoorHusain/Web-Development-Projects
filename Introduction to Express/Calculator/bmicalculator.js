const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html")  // This is because we can't know someone else computer repository.
})

app.post("/bmicalculator", function (req, res) { // bmicalculator is not case sensitive.
   // res.send("it is working fine")
    var height = parseFloat(req.body.num1)
    var weight = parseFloat(req.body.num2)
    
    var bmi = weight/(height * height)
    res.send("The result is: "+bmi)
})

app.listen(4000,function name(params) {
    console.log("server started")
})