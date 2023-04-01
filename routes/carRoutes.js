const express = require('express')
const routing = express.Router()
const cityDetails = require('../model/citId')


routing.post('/addDetails',(req,response)=>{

    cityDetails.create(req.body,(err, result)=>{
        if(err){
            console.log(err)
        }
        else{
            response.send('data added successfully')
        }
    })
})

//read end point
routing.get('/getDetails',(req,response)=>{

    cityDetails.find((err, result)=>{
        if(err){
            console.log(err)
        }
        else{
            response.send(result)
        }
    })
})

//update end point
routing.put('/updateDetails',(req,response)=>{

    cityDetails.findOneAndUpdate({_id:req.body.id},{$set:{city:req.body.city}},(err, result)=>{
        if(err){
            console.log(err)
        }
        else{
            response.send('data update successfully')
        }
    })
})


routing.post('/deleteDetails',(req,response)=>{

    cityDetails.findOneAndDelete({_id:req.body.id},(err, result)=>{
        if(err){
            console.log(err)
        }
        else{
            response.send('data deleted successfully')
        }
    })
})

module.exports = routing;