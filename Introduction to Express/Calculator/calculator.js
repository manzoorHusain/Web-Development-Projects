const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")  // This is because we can't know someone else computer repository.
})

app.post("/", function (req, res) {
   // res.send("it is working fine")
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)
    var result = num1 + num2
    res.send("The result is: "+result)
})

app.listen(3000,function name(params) {
    console.log("server started")
})