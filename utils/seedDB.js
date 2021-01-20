const mongoose = require("mongoose");
const db = require("../models");
const { mongoOptions } = require("./config")

// This file empties the Books collection and inserts the books below


mongoose.connect(process.env.ATLAS_URL || "mongodb://localhost/snipits",
   mongoOptions
);

const userSeed = 
   {
      username: "Skirkp18",
      name:"sean",
      email: "Skirkp18@gmail.com",
      password: "test"
   }
;
const snipitsSeeds = [
   {
      body: "<h1>Hello World!</h1>",
      username: "Admin",
      title:"firstsnipit",
      category:"JSX",
      date:"01/19/2021"
   }
   

];

// remove all comments
db.Snipit.deleteMany({})
// remove all users
  .then(() => db.User.deleteMany({}))
  // add user
  .then(() => db.User.create(userSeed))
  // add comments seeds
  .then((user) => db.Snipit.create(snipitsSeeds[0])
      // add comment ref to user
      .then(({_id}) => db.User.findOneAndUpdate({_id: user._id}, { $push: { snipits: _id } }, { new: true }))
  )
//   .then((user) => db.Snipit.create(snipitsSeeds[1])
//       // add comment ref to user
//       .then(({_id}) => db.User.findOneAndUpdate({_id: user._id}, { $push: { snipits: _id } }, { new: true }))
//   )
  .then(() => {
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
