const mongoose = module.require('mongoose');
const users=mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],

    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true

    }



})

const modelofusers =mongoose.model("users",users)

module.exports=modelofusers;
