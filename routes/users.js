const express = require('express');
const router = express.Router();
const itemsModel = require('../models/model.js');

/* GET users listing. */
router.get('/find', function (req, res, next) {
  itemsModel.find({}, function (err, data) {
    if (err) console.log(err);
    console.log(data)
    res.json(data);
  }).lean().exec();
});

router.post('/add', function(req, res, next){
  let itemsmodel = new itemsModel(req.body);
  itemsModel.create(itemsmodel).then(itemsModel =>{
    res.status(200).json({'Result':'Items created Sucessfully'})
  })
});


module.exports = router;
