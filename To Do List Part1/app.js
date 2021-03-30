const express = require("express")
const bodyParser = require("body-parser")
const { urlencoded } = require("body-parser")
const app = express()
var items = ["Food", "Mango"]

let workItems = ["Home Work"]
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))
app.set('view engine', 'ejs')
var today = new Date()
var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
}

var day = today.toLocaleDateString("en-US",options)
app.get("/", function (req, res) {

    res.render("list", {listTitle: day, listOfItem: items})
    //res.sendFile(__dirname + "/list")
})


app.get("/work", function (req, res) {
    res.render("list", {listTitle: "Work list", listOfItem: workItems})
})
app.get("/about", function (req, res) {
    res.render("about")
})
app.post("/", function (req, res) {
    var item = req.body.newItem

    if (req.body.list === "Work") {
        workItems.push(item)
        res.redirect("/work")
    } else {
        items.push(item)
        res.redirect("/")
    }



})


// app.post("/work", function (req, res) {
//     var item = req.body.newItem
//     console.log(item);
//     workItems.push(item)

//     res.redirect("/work")

// })

app.listen(3000, function(){
    console.log("Port 3000 started");
})
