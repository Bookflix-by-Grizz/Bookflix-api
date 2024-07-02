import {Schema, model} from 'mongoose';


const userSchema = new Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        
    },
    age: {
        type: String,
        required:true
    },
    avatar: {
        type: String,
        required:true
    },
    nicknames: {
        type: String,
        required:true
    },
    gender: {
        type: String,
        required:true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: false
    }
    },
    {
    timestamps: true,
    discriminatorKey: 'role',
    }
);

export default model ('User', userSchema);
