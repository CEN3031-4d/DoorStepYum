const dish = require('../controllers/dish.server.controller.js'),
  express = require('express'),
  router = express.Router();

router.route('/')
  .get(dish.allDishes);

router.route('/:id')
  .get(dish.returnByID);

router.route('/add')
  .post(dish.addDish);

router.route('/update/:id')
  .post(dish.updateDish);

router.route('/delete/:id')
  .delete(dish.deleteDish);

  module.exports = router;