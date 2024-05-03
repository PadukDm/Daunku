const express = require(`express`)
const app = express()
const PORT = 3000
const mongoose = require(`mongoose`) 
const path = require(`path`)

app.use(express.static(`public`))
app.use(express.json())

app.get(`/admin`, (req,res)=>{
    res.sendFile(path.join(__dirname, 'public'))
})

mongoose.connect(`mongodb+srv://root:oGff1dNEIS9tbJBP@cluster0.tp3rcn1.mongodb.net/`)
    .then(()=>{
        console.log(`Connected to MongoDB`)
    })


const Plants = mongoose.model('Plants', {title: String, price: Number})

app.post(`/add-plants`, async(req,res)=>{
    try{
        const {title, price} = req.body;
        const plants = new Plants({title, price});
        await plants.save();
        console.log(`Plant created`)
        res.status(201).json(plants);
    }catch(err){
        res.status(500).json({message:err})
    }
})

app.get('/plants', async(req, res)=>{
    try{
        const plants = await Plants.find()
        res.json(plants)
    }catch(err){
        res.status(500).json({message:err})
    }
})

app.listen(PORT, ()=>{
    console.log(`Server work on port: ${PORT}`)
})