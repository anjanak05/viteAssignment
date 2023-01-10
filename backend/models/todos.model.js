const mongoose = require("mongoose");

const marriageSchema = new mongoose.Schema({
    name :{type:String, required:true},
    age :{type:Number, required:true},
    profilePic :{type:String, required:true},
    gender :{type:String, required:true},


})

const  marriageModel = mongoose.model("marriage", marriageSchema)

module.exports={todoModel}