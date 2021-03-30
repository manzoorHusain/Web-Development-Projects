const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function (req, res) {
    res.sendFile(__dirname+"/index.html")
})

const https = require("https")
app.post("/", function (req, res) {
    
    const city = req.body.city
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=800be0781932c0773ced41cf6c9b4ced&units=metric"

    https.get(url, function (response) {
        console.log(response.statusCode);
        response.on("data", function (data) {
            const weatherData = JSON.parse(data)
            //console.log(weatherData);
            //console.log(JSON.stringify(weatherData));

            
            //console.log(city);


            // Knowing the temperature
            const temp = weatherData.main.temp
            //const description = weatherData.weather.description  Firstly i did it wrong
         
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
            console.log(temp);
            res.write("<p>The weather is currently: "+weatherDescription+"</p>")
            res.write("<h1>The temperature of " + city + " is: " + temp + "</h1>")
            res.write("<img src="+imageUrl+">")
            res.send()
           // console.log(JSON.stringify(object));
        }) 

    //res.send("oekdkfj")
    })

   

    //res.send("This is Working Fine!") We can't send two send methods 
})

// const object = {
//     name: "manzoor ",
//     age: 20,
//     country: "Pakistan"
// }

// console.log(JSON.stringify(object));




app.listen(3000, function () {
    console.log("Server started at port 3000");
})
