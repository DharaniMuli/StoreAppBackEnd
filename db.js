var mongoose = require('mongoose');

let uri = 'mongodb+srv://Dharani:OmSaiRam@246@cluster0-yfvvs.mongodb.net/OurProject?retryWrites=true&w=majority';

// let uri = 'mongodb://localhost:27017/viprahub';
mongoose.connect(uri, { useNewUrlParser: true });

mongoose.connection.on("connected", () => {
    console.log("Connection Sucessfull");
});
