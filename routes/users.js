const express = require('express');
const router = express.Router();
const itemsModel = require('../models/model.js');
var mongoose = require('mongoose');
var types = mongoose.Types;

/* GET users listing. */
router.get('/find', function (req, res, next) {
  itemsModel.find({}, function (err, data) {
    if (err) console.log(err);
    // console.log(data)
    res.json(data);
  }).lean().exec();
});

router.post('/add', function(req, res, next){
  let itemsmodel = new itemsModel(req.body);
  itemsModel.create(itemsmodel).then(itemsModel =>{
    res.status(200).json({'Result':'Items created Sucessfully'})
  })
});

router.post('/edit', function(req, res, next){
    let itemsmodel = new itemsModel(req.body);
    itemsModel.create(itemsmodel).then(itemsModel =>{
        res.status(200).json({'Result':'Items created Sucessfully'})
    })
});


router.post('/delete', function(req, res, next){
    console.log("Hi")
    let itemsmodel = new itemsModel(req.body);
    console.log(req.body.id);
    itemsModel.deleteMany({_id : types.ObjectId(req.body.id)}) .then(itemsModel =>{
        console.log(itemsModel)
        res.status(200).json({'Result':'Items Deleted Sucessfully'})
    })
});


module.exports = router;
