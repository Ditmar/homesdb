const mongoose = require("mongoose");
mongoose.connect("mongodb://172.20.0.2:27017/homesdb", {useNewUrlParser: true});
if (mongoose) {
    console.log("Conectado");
}
module.exports = mongoose;
