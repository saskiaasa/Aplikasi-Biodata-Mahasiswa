const express = require('express')
const { route } = require('express/lib/application')
const app = express()
const port = 5000
const routermahasiswa = require('./routers/mahasiswa')
const mongoose = require('mongoose')
require('dotenv').config();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.DATABASE_URL, {
    
    useNewUrlParser: true, 
    useUnifiedTopology: true
    

});
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connectionerror: "));
    db.once("open", function () {
    console.log("koneksi ws nyambung pren");
    });
   
    
app.get('/about',(req,res)=>{
    res.send('about')
})


app.use(routermahasiswa)

app.listen(port,()=>{
    console.log('server berjalan pada port'+port)
})