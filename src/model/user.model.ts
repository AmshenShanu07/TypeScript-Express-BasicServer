import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required: true
    },
    emailAuthToken:{
        type: String,
        required:false,
        default:null
    },
    emailAuthTokenExpiry:{
        type:Date,
        required: false,
        default:null,
    },
    isEmailVerified:{
        type:Boolean,
        default:false,
    }
});

export { userSchema };


export default mongoose.model("users", userSchema);