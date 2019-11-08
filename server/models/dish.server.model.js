//You can replace this entire file with your Bootcamp Assignment #2 - ListingSchema.js File

/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema for the data in the listings.json file that will define how data is saved in your database
     See https://mongoosejs.com/docs/guide.html for examples for creating schemas
     See also https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
  */
var dishSchema = new Schema({
  /* Your code for a schema here */ 
  //Check out - https://mongoosejs.com/docs/guide.html
    dishName: {type: String, required: true, unique: true},
    dishPrice: {type: Number, required: true, unique: false},
    dishDescription: {type: String, required: true, unique: false},
    dishIngrediants: {type: [String], required: false, unique: false},
    dishPicture: {type: Buffer, required: false, unique: true},
    dishChef: {type: String, required: true, unique: false}

});



/* Use your schema to instantiate a Mongoose model */
//Check out - https://mongoosejs.com/docs/guide.html#models
var Dish = mongoose.model('Dish', dishSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Dish;
