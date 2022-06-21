const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/htmlfile/index.html")
})

app.get('/exp1',(req,res)=>{
    res.sendFile(__dirname+"/htmlfile/exp1.html")
})

app.get('/exp2',(req,res)=>{
    res.sendFile(__dirname+"/htmlfile/exp2.html")
})

app.get('/exp3',(req,res)=>{
    res.sendFile(__dirname+"/htmlfile/exp3.html")
})

app.get('/exp4',(req,res)=>{
    res.sendFile(__dirname+"/htmlfile/exp4.html")
})

app.get('/exp5',(req,res)=>{
    res.sendFile(__dirname+"/htmlfile/exp5.html")
})

app.get('/exp6',(req,res)=>{
    res.sendFile(__dirname+"/htmlfile/exp6.html")
})

app.get('/exp7',(req,res)=>{
    res.sendFile(__dirname+"/htmlfile/exp7.html")
})

app.get('/exp8',(req,res)=>{
    res.sendFile(__dirname+"/htmlfile/exp8.html")
})

app.get('/exp9',(req,res)=>{
    res.sendFile(__dirname+"/htmlfile/exp9.html")
})

app.get('/exp10',(req,res)=>{
    res.sendFile(__dirname+"/htmlfile/exp10.html")
})

app.get('/exp11',(req,res)=>{
    res.sendFile(__dirname+"/htmlfile/exp11.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})