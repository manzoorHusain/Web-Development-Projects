
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser: true})

const fruitSchema = new mongoose.model({
    name: String,
    rating: Number,
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema)
const fruit = new Fruit({
    name: "Grapes",
    rating: 8,
    review: "I just loved it!"
})
fruit.save()

const personSchema = new mongoose.model({
    name: String,
    age: Number
})
const Person = mongoose.model("person", personSchema)
const person = new Person({
    name: "John",
    age: 37
})
person.save()

const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Insert some documents
    collection.insertMany([
        {
            name: "Apple",
            score: 5,
            review: "That was so tasty"
        },
        {
            name: "Orange",
            score: 4,
            review: "That was so Bitter"
        },
        {
            name: "Mango",
            score: 6,
            review: "Awesome"
        }
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }

// Person.insertMany([person], function (err) {
//     if (err) {
//         console.log("error");
//     }
//     else {
//         console.log("Successful added");
//     }
// })

  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('person');
    // Find some documents
    collection.find({}).toArray(function(err, fruits) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(fruits)
      callback(fruits);
    });
  }