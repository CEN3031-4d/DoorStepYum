const config = require('../config/config');

var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

// adding password encryption to chef model
var encrypt = require('mongoose-encryption');

var chefSchema = new Schema({
    chefName: {type: String, required: true, unique: true},
    chefBio: {type: String, required: true, unique: true},
    chefExperience: {type: Number, required: true, unique: false},
    chefEmail: {type: String, required: true, unique: true},
    chefPassword: {type: String, required: false, unique: false},
    chefPrice: {type: Number, required: true, unique: false},
    chefPicture: {type: String, required: false, unique: false }
});


// adding keys
chefSchema.plugin(encrypt, { requireAuthenticationCode: false, encryptionKey: config.passKey.encKey, signingKey: config.passKey.sigKey, encryptedFields: ['chefPassword']} );

var Chef = mongoose.model('Chef', chefSchema);

module.exports = Chef;
