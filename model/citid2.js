const mongoose = require('mongoose')
const schema = mongoose.Schema
const objectId = schema.ObjectId

const cityDetail = {
    id:objectId,
    name:{type:String},
    city:{type:String},
    country:{type:String}
}

module.exports = mongoose.model('cityDetail', cityDetail,'cityDetail')
