var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var dishSchema = new Schema({
    dishName: { type: String, required: true, unique: true },
    dishPrice: { type: Number, required: true, unique: false },
    dishDescription: { type: String, required: true, unique: false },
    dishIngredients: { type: [String], required: false, unique: false },
    dishChef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chef'
    },
    dishPicture: {type: String, required: false, unique: false }
});

var Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
