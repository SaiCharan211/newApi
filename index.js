const express=require("express")
const mongoose=require("mongoose")
const Alien=require('./alien')
const ap= require('./app')
const app=express()

mongoose.connect('mongodb://localhost/AlienNewDb',{useNewUrlParser:true})
const aa=mongoose.connection

aa.on('open',()=>console.log("connected"))
app.use(express.json())


app.get('/',async (req,res)=>{
    try{
        const aliens= await Alien.find()
        res.json(aliens)
    }catch(err){
        res.send("Error "+err)
    }
})

app.get('/home',(req,res)=>{
    res.send("welcome to home page")
})

app.get('/:id',async (req,res)=>{
    try{
        const aliens=await Alien.findById(req.params.id)
        res.json(aliens)
    }catch(err){
        res.send(err)
    }
})

app.post('/',async (req,res)=>{
    const nn=new Alien({
        brand:req.body.brand,
        price:req.body.price,
        discount:req.body.discount
    })
    try{
        const aa=await nn.save()
        res.json(aa)
    }catch(err){
        res.send("Error  "+ err)
    }
})


app.delete('/:id',async (req,res)=>{
    try{
        const aliens=await Alien.findByIdAndDelete(req.params.id)
        return res.json(await Alien.find())
    }catch(err){
        res.send(err)
    }
})


console.log(ap)


app.listen("312",()=>console.log("Sever started"))