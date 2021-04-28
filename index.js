const express = require('express')


const app = express()


app.get('/', (req,res)=>{
  const nodemailer = require('nodemailer')


  const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
      user:'joytalukder3332@gmail.com',
      pass:'197126aaa'
    }
  });
 
 
  const options = {
    form:'joytalukder3332@gmail.com',
    to:'mypiyastv2@gmail.com,mypiyastv@gmail.com,bussiness.piyas@gmail.com',
    subject:'sending email with niode js',
    text:'wow! thats very very simple!!'
  };
 
  transporter.sendMail(options , (err,info)=>{
    if(err){
      console.log(err)
    }else{
      console.log("sent------>"+info.response)
    }
  })
  res.send("hello")
})

const port = process.env.PORT || 2000

app.listen(port, ()=>{
  console.log(`port is running on ${port}`)
})