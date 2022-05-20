// import dependencies
const express = require("express")
const cors = require("cors")
const app = express()

// config mongoose, cors, express
require(("./configs/mongoose.config"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes
require("./routes/pirate.routes")(app)

// listen to the port
app.listen(8000, ()=>console.log("listening to the port 8000") )