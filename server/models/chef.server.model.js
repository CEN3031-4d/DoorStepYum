var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

// adding password encryption to chef model
var encrypt = require('mongoose-encryption');

var chefSchema = new Schema({
    chefName: {type: String, required: true, unique: true},
    chefBio: {type: String, required: true, unique: true},
    chefExperience: {type: Number, required: true, unique: false},
    chefEmail: {type: String, required: true, unique: true},
    chefPassword: {type: String, required: true, unique: true},
    chefPrice: {type: Number, required: true, unique: false},
    chefPicture: {type: String, required: false, unique: false }
});

// generating keys
var encKey = "/MhOKpkDVHG8lySgvtD6RvEumFcVjcq5qrEuPWPwKzI=";
var sigKey = "zxpQhEkGzrJ035e7anooMmFpokI4CQKNWiXI1YJSsgN/6DNw5IgJaelMNtYBepMeB6h2dbua32PXRuKT7JcYPQ==";

// adding keys
//chefSchema.plugin(encrypt, { requireAuthenticationCode: false, encryptionKey: encKey, signingKey: sigKey, encryptedFields: ['chefPassword']} );

var Chef = mongoose.model('Chef', chefSchema);

module.exports = Chef;
