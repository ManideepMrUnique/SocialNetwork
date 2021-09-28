
const mongoose = require('mongoose');

const DB='mongodb+srv://killer:Killer@cluster0.tqgeg.mongodb.net/ProjectExpress?retryWrites=true&w=majority';

mongoose.connect(DB,{
    useNewUrlParser:true,
    //useCreateIndex:true,
    useUnifiedTopology:true,
    //useFindAndModify:false
}).then(()=>{
    console.log("connected at 8000");
}).catch((err)=>{
    console.log(err);
    console.log("no connection");
})