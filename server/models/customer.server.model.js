const config = require('../config/config');

var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

 // adding password encryption to customer model
var encrypt = require('mongoose-encryption');

var customerSchema = new Schema({
    customerName: {type: String, required: true, unique: true},
    customerEmail: {type: String, required: true, unique: true},
    customerPassword: {type: String, required: false, unique: false},   
});

// adding keys
customerSchema.plugin(encrypt, {requireAuthenticationCode: false, encryptionKey: config.passKey.encKey, signingKey: config.passKey.sigKey, encryptedFields: ['customerPassword']});
var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
