const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routing = require('./routes/carRoutes')
const bodyparser = require('body-parser')

mongoose.connect('mongodb://127.0.0.1:27017/cityDetails')

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use('/route', routing)

app.get('/',(req, res)=>{
    res.send('this from the express- mongoose')

})


app.listen(4004, ()=>{
    console.log('running in port number 4004')
})