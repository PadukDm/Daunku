const express = require(`express`)
const app = express()
const PORT = 3000
const mongoose = require(`mongoose`) 

app.use(express.static(`public`))
app.use(express.json())

mongoose.connect(`mongodb+srv://root:oGff1dNEIS9tbJBP@cluster0.tp3rcn1.mongodb.net/`)
    .then(()=>{
        console.log(`Connected to MongoDB`)
    })


app.listen(PORT, ()=>{
    console.log(`Server work on port: ${PORT}`)
})