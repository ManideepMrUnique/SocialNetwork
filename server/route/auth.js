const express=require('express');

const User = require('../model/UserSchema');

const bcrypt = require('bcryptjs');

const router=express.Router();

router.get('/',(req,res)=>{
    res.send("You are Home");
});


router.post('/register',async (req,res)=>{
    console.log(req.body);
    const {email,username,password,phone}=req.body;
    if(!email||!username||!password||!phone)
    {
        return res.status(422).json({error:"Plz fill"});
    }
    else
    {
        try
        {
            const userExists=await User.findOne({email:email});
            if(userExists)
            {
                return res.status(422).json({error:"User Exists"});
            }
            const user=new User(req.body);
            await user.save();
            res.status(201).json({message:"Registratioin Successful"});
        }
        catch(err)
        {
            console.log(err);
        }
    }
});

router.post('/login',async (req,res)=>{
    //res.send("here bro");
    const {email,password}=req.body;
    console.log(req.body);
    if(!email||!password)
    {
        return res.status(400).json({error:"Plz fill"});
    }
    else
    {
        try
        {
            const userLogin=await User.findOne({email:email});
            if(!userLogin)
            {
                res.status(400).json({error:"User doesn't exist"});
            }
            const passMatch=await bcrypt.compare(password,userLogin.password);

            if(!passMatch)
            {
                res.status(400).json({message:"Invalid Password"});
            }

            // const token=await userLogin.generateAuthToken();
            // console.log(token);

            // res.cookie("jwtoken",token,
            // {
            //     expires:new Date(Date.now()+10000000),
            //     httpOnly:true
            // });
        }
        catch(err)
        {
            console.log("here");
            console.log(err);
        }
        res.status(200).json({message:"Login Sucessful"});
    }
});

router.get('*',(req,res)=>{
    res.send('bruhhhh page doesnt exist');
});

module.exports=router;