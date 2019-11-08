const chef = require('../controllers/chef.server.controller.js'),
  express = require('express'),
  router = express.Router()

let Chef = require('../models/chef.server.model');

router.route('/').get(function (req, res) {
  Chef.find(function (err, chefs) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(chefs);
    }
  });
});

router.route('/:id').get(function (req, res) {
  let id = req.params.id;
  Chef.findById(id, function (err, chef) {
    if (err) {
      console.log(err);
    } else {
      res.json(chef);
    }
  });
});

router.route('/add').post(function (req, res) {
  let chef = new Chef(req.body);
  chef.save()
    .then(chef => {
      res.status(200).json({ 'chef': 'chef added successfully' });
    })
    .catch(err => {
      res.status(400).send('adding new chef failed');
    });
});

router.route('/update/:id').post(function (req, res) {
  Todo.findById(req.params.id, function (err, chef) {
    if (!chef)
      res.status(400).send('Chef is not found');
    else {
      chef.chefName = req.body.chefName;
      chef.chefBio = req.body.chefBio;
      chef.chefExperience = req.body.chefExperience;
      chef.chefEmail = req.body.chefEmail;
      chef.chefPassword = req.body.chefPassword;
      chef.chefPrice = req.body.chefPrice;
      chef.chefPicture = req.body.chefPicture;

      chef.save()
        .then(tody => {
          res.json('Chef Updated');
        })
        .catch(err => {
          res.status(400).send('Update not possible');
        })
    }
  })
})

module.exports = router;