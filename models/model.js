const mongoose =require('mongoose');
const ItemsSchema = new mongoose.Schema({
    Description:{
        type: String,
    },
    Cost:{
        type: Number,
    }
});

/*Register UserSchema object inside the mongoose*/
const Items =mongoose.model('Items', ItemsSchema);
module.exports = Items;
