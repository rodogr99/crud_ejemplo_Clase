const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./src/routes');
const app = express();
const port = 3000;

app.get('/',(req,res)=> {
    res.send('api works');
});
app.use(express.json());
app.use(apiRoutes);

const uri = "mongodb+srv://iteso2022:ITESO1234@cluster0.jqhyj.mongodb.net/agenda?retryWrites=true&w=majority";

mongoose.connect(uri,(err)=>{
        if(!err){
            console.log('se conecto a la base de datos');
            app.listen(port,() => {
                console.log("app is running in port" + port);
            });
        }else{
            console.log('fallo al conectarse la base de datos');
        }    
});


// error-first callback