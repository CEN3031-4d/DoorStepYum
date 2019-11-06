//You can replace this entire file with your Bootcamp Assignment #2 - ListingSchema.js File

/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema for the data in the listings.json file that will define how data is saved in your database
     See https://mongoosejs.com/docs/guide.html for examples for creating schemas
     See also https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
  */
var chefSchema = new Schema({
  /* Your code for a schema here */ 
  //Check out - https://mongoosejs.com/docs/guide.html
    chefName: {type: String, required: true, unique: true},
    chefBio: {type: String, required: true, unique: true},
    chefExperience: {type: Number, required: true, unique: false}, // shouldn't be array I guess
    chefEmail: {type: String, required: true, unique: true},
    chefPassword: {type: String, required: true, unique: true},
    chefPrice: {type: Number, required: true, unique: false},
    chefPicture: {type: Buffer, required: false, unique: true }
  

  /* maybe useful
  created_at: Date,
  updated_at: Date
  */
  

});

// //console.log(uri);
// /* Create a 'pre' function that adds the updated_at (and created_at if not already there) property 
//    See https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
// */
// chefSchema.pre('save', function(next) {
//   /* your code here */
//   // update current date
//   var currentDate = new Date();

//   // every time saved, update updated_at
//   this.updated_at = currentDate;

//   // if created_at is missing, add ONCE
//   if (!this.created_at) {
//     this.created_at = currentDate;
//   }

//   next();
// });

/* Use your schema to instantiate a Mongoose model */
//Check out - https://mongoosejs.com/docs/guide.html#models
var Chef = mongoose.model('Chef', chefSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Chef;
