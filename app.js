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


app.listen(PORT, ()=>{
    console.log(`Server work on port: ${PORT}`)
})