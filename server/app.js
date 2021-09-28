const express=require('express');

const app=express();

require('./db/conn');

const PORT=process.env.PORT||8000;

const router=express.Router();

app.use(express.json());

app.use(require('./route/auth'));

// if(process.env.NODE_ENV==="production")
// {
//     app.use(express.static("client/build"));
// }

app.listen(PORT,()=>{
    console.log("listening port"+PORT);
});