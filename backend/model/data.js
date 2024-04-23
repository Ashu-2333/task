const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    phoneNo : {
        type : String,
        required : true,
        unique : true
    },
})

const Data = mongoose.model("Data", dataSchema);
module.exports = Data;