const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    token:{
        type:String
    }
});

userSchema.pre('save',async function(next){
    if(this.isModified('password'))
    {
        this.password=await bcrypt.hash(this.password,12);
    }
    next();
});

userSchema.methods.generateAuthToken=async ()=>{
    try{
        let tokenT=jwt.sign({_id:this._id},"abcdefghijklmnopqrstuvwxyz");
        this.tokens=tokenT;
        await this.save();
        return tokenT;
    }
    catch(err)
    {
        console.log(err);
    }
}

const User = mongoose.model('USER',userSchema);

module.exports = User;