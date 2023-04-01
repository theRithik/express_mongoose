
const express = require('express')
const app = express()
const city = require('./model/citid2')

app.get('/', (req,res)=>{
    res.send('this is from server2')
})

app.post('/cityDetails',(req, response)=>{
    city.create(req.body,(err, res)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('data is added successfully')
        }
    })
})
app.listen(6000,()=>{
    console.log('server is running in 6000')
})