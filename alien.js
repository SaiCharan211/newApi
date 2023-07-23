const mongoose=require('mongoose')

const moduleSchema= new mongoose.Schema({
    brand:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        required:true
    }
    
})
module.exports=mongoose.model('Alien',moduleSchema)