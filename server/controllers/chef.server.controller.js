const Chef = require('../models/chef.server.model.js')

exports.allChefs = (req, res) => {
    Chef.find((err, chefs) => {
        if (err) {
          console.log(err);
        }
        else {
          res.json(chefs);
        }
      });
};

exports.returnByID = (req, res) => {
        let id = req.params.id;
        Chef.findById(id, function (err, chef) {
          if (err) {
            console.log(err);
          } else {
            res.json(chef);
          }
        });
}

exports.updateChef = (req, res) => {
    Chef.findById(req.params.id, function (err, chef) {
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
          .then(chef => {
            res.json('Chef Updated');
          })
          .catch(err => {
            res.status(400).send('Update not possible');
          })
      }
    })
  }
  
  exports.addChef = (req, res) => {
    let chef = new Chef(req.body);
    chef.save()
      .then(chef => {
        res.status(200).json({ 'chef': 'chef added successfully' });
      })
      .catch(err => {
        res.status(400).send('adding new chef failed');
      });
  }