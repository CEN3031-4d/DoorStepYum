const dish = require('../controllers/dish.server.controller.js'),
  express = require('express'),
  router = express.Router();

router.route('/getDishes')
  .get(dish.allDishes);

router.route('/getDishesFull')
  .get(dish.allDishesFull);

router.route('/find/:id')
  .get(dish.returnByID);

router.route('/add')
  .post(dish.addDish);

router.route('/update/:id')
  .post(dish.updateDish);

router.route('/update/addIngredient/:id')
  .post(dish.addIngredient);

router.route('/delete/:id')
  .delete(dish.deleteDish);

  module.exports = router;