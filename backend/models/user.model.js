import { Schema } from "mongoose";
import mongoose from "mongoose";
const userSchema=new Schema(
    {
        name:{type:String,required:true},
        username:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        token:{type:String},
        activity: [
            {
                meetingCode: { type: String, required: true },
                date: { type: Date, default: () => new Date() }
            }
        ]
    }
)
const User = mongoose.model("User",userSchema);
export {User};