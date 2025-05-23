const express = require("express")
const mongoose = require('mongoose');
// const {MONGO_URI} = require("./config/config")

const app = express()
// mongoose.connect(`mongodb://disu:mypass@mongo:27017/?authSource=admin`).then(()=>console.log("Successfully connected to DB")).catch((e)=>console.log(e))

app.get("/", (req, res)=> {
    res.send("<h2>Hello Everyone Dev!</h2>")
})

const port = process.env.PORT || 5000
app.listen(5000, '0.0.0.0', () => {
  console.log("Server is running on port 3000");
});