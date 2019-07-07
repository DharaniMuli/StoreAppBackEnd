var mongoose = require('mongoose');

let uri = 'mongodb+srv://Dharani:OmSaiRam@246@cluster0-yfvvs.mongodb.net/OurProject?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true });

mongoose.connection.on("connected", () => {
    console.log("Connection Sucessfull");
});
