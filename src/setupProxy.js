// Keep npm start functional locally with the same handler used in production.
const {handler}=require('../netlify/functions/pre-matricula');
module.exports=app=>{
  app.post('/.netlify/functions/pre-matricula',require('express').json({limit:'16kb'}),async(req,res)=>{
    const result=await handler({httpMethod:'POST',headers:req.headers,body:JSON.stringify(req.body)});
    res.status(result.statusCode).set(result.headers).send(result.body);
  });
};
