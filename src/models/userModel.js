import mongoose, { model } from "mongoose";
import { type } from "os";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"please provide username"],
        unique:true,
    },
    email:{
        type:String,
        required:[true,"please provide email"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"please provide password"],
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    forgotPassword:String,
    forgotPasswordTOkenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date
})

const User=mongoose.models.users || mongoose.model("users",userSchema)

export default User 