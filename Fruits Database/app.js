const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Connection URL

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
  name: "Grapes",
  rating: 4,
  review: "Grapes are sour.",
});
//fruit.save()
const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "It was so fresh",
});
pineapple.save();
const banana = new Fruit({
  name: "Banana",
  rating: 8,
  review: "Very tasty",
});
//banana.save()
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  faviroteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);
const person = new Person({
  name: "Manzoor",
  age: 22,
  faviroteFruit: banana,
});
const sameed = new Person({
  name: "Sameed",
  age: 22,
  faviroteFruit: pineapple,
});
sameed.save();
//person.save()

const studentSchema = new mongoose.Schema({
  name: String,
  rollNo: {
    type: Number,
    min: 5,
    max: 20,
  },
  city: String,
});

const Student = mongoose.model("Student", studentSchema);
const student = new Student({
  name: "Mazhar",
  rollNo: 10,
  city: "Muzaffarabad",
});

const student1 = new Student({
  name: "Aki",
  rollNo: 11,
  city: "Kel",
});
const student2 = new Student({
  name: "Ahmed",
  rollNo: 12,
  city: "Islamabad",
});

const student3 = new Student({
  name: "Naveed",
  rollNo: 13,
  city: "Karachi",
});
//student.save()
console.log("Working properly.");
// Student.insertMany([student1, student2, student3], function (err) {
//   if (err) {
//     console.log("there is an error"+err);
//   } else {
//     console.log("Successfully added to the Database");
//   }
// })

const insertDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection("fruits");
  // Insert some documents
  collection.insertMany(
    [
      {
        name: "Apple",
        score: 5,
        review: "That was so tasty",
      },
      {
        name: "Orange",
        score: 4,
        review: "That was so Bitter",
      },
      {
        name: "Mango",
        score: 6,
        review: "Awesome",
      },
    ],
    function (err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    }
  );
};

// Fruit.find(function (err,fruits) {
//   if (err) {
//       console.log(err);
//   }
//   else {
//     console.log(fruits);
//   }
// })

// Reading data from database
/* Student.find(function (err, students) {
  if (err) {
    console.log(err);
  }
  else {
    console.log(students);
  }
})  */

// Reading only names of students
Student.find(function (err, students) {
  if (err) {
    console.log(err);
  } else {
    // mongoose.connection.close()  // It is not compulsory. Used to close the connection then we don't have to write ( ctrl + c) to run code again.
    for (let i = 0; i < students.length; i++) {
      // console.log(students[i].name);
    }
    //console.log("................");
    // Second way of looping
    students.forEach(function (student) {
      console.log(student.name);
    });
  }
});

// Updating the document
Student.updateOne(
  { _id: "5f82d92e615614035c392708" },
  { name: "Ali" },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully updated the document.");
    }
  }
);

// Deletion in document
Student.deleteOne({ _id: "5f82d92e615614035c39270a" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully deleted the documet.");
  }
});
