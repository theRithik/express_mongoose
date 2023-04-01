const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')

const app = express()

//middleware
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

// configuration fropm tempalting engine
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.listen(4004,()=>{
    console.log('in 4004')
})