var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var chefSchema = new Schema({

    chefName: {type: String, required: true, unique: true},
    chefBio: {type: String, required: true, unique: true},
    chefExperience: {type: Number, required: true, unique: false},
    chefEmail: {type: String, required: true, unique: true},
    chefPassword: {type: String, required: true, unique: true},
    chefPrice: {type: Number, required: true, unique: false},
    chefPicture: {type: String, required: false, unique: false }
});

/* Use your schema to instantiate a Mongoose model */
//Check out - https://mongoosejs.com/docs/guide.html#models
var Chef = mongoose.model('Chef', chefSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Chef;
