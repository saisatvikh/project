const { urlencoded } = require("express");
const express=require("express");
const app=express();
const path=require('path');
const port=80;
const fs=require('fs');
const { stringify } = require("querystring");
app.use('/static',express.static('static'));
app.use(urlencoded());

app.set('view-engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    const title="this is my first website";
    const content='hi,hello ,this is sai';
    const params={'title':title,'content':content};

    res.status(200).render('index.pug',params);
})
app.post('/',(req,res)=>{
   console.log(req.body);  
   const message="your data has been submitted";
   const params={
       msg:message
   };
   let str=`name: ${req.body.name}`+"\n"+`gender: ${req.body.gender}`+"\n"+`age: ${req.body.age}`+"\n"+`address: ${req.body.address}`+"\n"+`info: ${req.body.info}`
   res.status(200).render('index.pug',params);
   fs.writeFileSync('output.txt',str);
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})