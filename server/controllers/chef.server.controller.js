const Chef = require('../models/chef.server.model.js')
var AWS = require('aws-sdk');
//const config = require('../config/config');
AWS.config = new AWS.Config({ accessKeyId: process.env.accessKey, secretAccessKey: process.env.secretAccessKey, region: 'us-east-2' });
// for local use
//AWS.config = new AWS.Config({ accessKeyId: config.aws.accessKey, secretAccessKey: config.aws.secretAccessKey, region: 'us-east-2' });
const s3 = new AWS.S3();

//Used to populate the table in client\src\components\Chefs\Chefs.js
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

exports.allChefsFull = (req, res) => {
  Chef.find()
    .populate('chefRequests.customer')
    .exec((err, chefs) => {
      if (err) {
        console.log(err);
      }
      else {
        res.json(chefs);
      }
    })
};

//Used to initialize the forms in client\src\components\EditChef\EditChef.js
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

exports.putImage = (req, res) => {
  var params = { Bucket: req.body.bucket, Key: req.body.filepath, Body: req.files[0].buffer }
  s3.putObject(params, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    else {
      res.status(200).send("Success! (?)");
    }
  })
}

exports.updateImage = (req, res) => {
  var params = { Bucket: req.body.bucket, Key: req.body.filepath, Body: req.files[0].buffer }
  s3.putObject(params, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    else {
      res.status(200).send("Success! (?)");
    }
  })
  params = { Bucket: req.body.bucket, Key: req.body.oldfilepath }
  s3.deleteObject(params, (err, data) => {
    if (err)
      console.log(err);
    else
      console.log("Image removed");
  })
}

exports.returnImage = (req, res) => {
  s3.getObject(req.query, (err, data) => {
    if (err) {
      console.log(err, err.stack);
    }
    else {
      res.json(data);
    }
  });
}

exports.test = (req, res) => {
  console.log(req.body.filepath);
  console.log(req.files[0].buffer)
  res.status(200).send('Words');
}

//Used to update the specified entry in client\src\components\EditChef\EditChef.js
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
      chef.chefCuisineTypes = req.body.chefCuisineTypes;

      chef.save()
        .then(chef => {
          res.json('Chef Updated');
        })
        .catch(err => {
          res.status(400).send(err);
        })
    }
  })
}

//Used to create a new Chef in client\src\components\CreateChef\CreateChef.js
exports.addChef = (req, res) => {
  let chef = new Chef(req.body);
  chef.save()
    .then(chef => {
      res.status(200).json({ 'chef': 'chef added successfully' });
    })
    .catch(err => {
      res.status(400).send(err);
    });
}

//Used to delete a Chef in client\src\components\Chefs\Chefs.js
exports.deleteChef = (req, res) => {

  Chef.findById(req.params.id, (err, chef) => {
    if (!chef)
      res.status(400).send('Chef is not found');
    else {
      var params = {
        Bucket: "chefpictures",
        Key: chef.chefPicture
      }
      chef.remove()
        .then(chef => {
          res.json('Chef Deleted');
          s3.deleteObject(params, (err, data) => {
            if (err)
              console.log(err);
            else
              console.log("Image removed");
          })
        })
        .catch(err => {
          res.status(400).send(err);
        })
    }
  })
}


exports.makeRequest = (req, res) => {
  Chef.findById(req.params.id, (err, chef) => {
    if (!chef)
      res.status(404).send("Chef Not Found");
    else if (err)
      res.status(400).send(err);
    else {
      req.body.status = "pending";
      chef.chefRequests.push(req.body)
      chef.save()
        .then(chef => {
          res.json("Request sent to chef")
        })
        .catch(err => {
          res.status(400).send(err)
        })
    }
  })

}