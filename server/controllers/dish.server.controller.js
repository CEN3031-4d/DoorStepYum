const Dish = require('../models/dish.server.model');

exports.allDishesFull = (req, res) => {
  Dish.find()
    .populate('dishChef')
    .exec((err, dishs) => {
      if (err) {
        console.log(err);
      }
      else {
        res.json(dishs);
      }
    })
};

exports.allDishes = (req, res) => {
  Dish.find()
    .exec((err, dishs) => {
      if (err) {
        console.log(err);
      }
      else {
        res.json(dishs);
      }
    })
};


exports.returnByID = (req, res) => {
  let id = req.params.id;
  Dish.findById(id, function (err, dish) {
    if (err) {
      console.log(err);
    } else {
      res.json(dish);
    }
  });
}

exports.updateDish = (req, res) => {
  Dish.findById(req.params.id, function (err, dish) {
    if (!dish)
      res.status(400).send('Dish is not found');
    else {
      dish.dishName = req.body.dishName;
      dish.dishDescription = req.body.dishDescription;
      dish.dishIngredients = req.body.dishIngredients;
      dish.dishPrice = req.body.dishPrice;
      dish.dishPicture=req.body.dishPicture

      dish.save()
        .then(dish => {
          res.json('Dish Updated');
        })
        .catch(err => {
          res.status(400).send(err);
        })
    }
  })
}

exports.addIngredient = (req, res) => {
  Dish.findById(req.params.id, (err, dish) => {
    if (!dish)
      res.status(400).send('Dish is not found');
    else if (err)
      res.status(400).send(err);
    else {
      dish.dishIngredients.push(req.body.ingredient);
      dish.save()
        .then(dish => {
          res.json("Ingredient added to dish")
        })
        .catch(err => {
          res.status(400).send(err)
        })
    }
  })

}

exports.addDish = (req, res) => {
  let dish = new Dish(req.body);
  dish.save()
    .then(dish => {
      res.status(200).json({ 'dish': 'dish added successfully' });
    })
    .catch(err => {
      res.status(400).send(err);
    });
}
exports.deleteDish = (req, res) => {
  Dish.findById(req.params.id, (err, dish) => {
    if (!dish)
      res.status(400).send('Dish is not found');
    else {
      dish.remove()
        .then(dish => {
          res.json('Dish Deleted');
        })
        .catch(err => {
          res.status(400).send(err);
        })
    }
  })
}