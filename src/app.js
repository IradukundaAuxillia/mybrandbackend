//Import using ES6
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import docRouter from "../documentation/index";



 

dotenv.config();
const app = express()



// Import Routes

const contact_route = require("./routes/contact");
const users_route = require("./routes/usersRoute")
const blog_route = require("./routes/blogRoute")

//Database connection
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log("database connected......")})
.catch((error)=>{console.log("database not connected"+error)})

// Route
app.use(express.json())
app.use("/api", contact_route)
app.use("/api", users_route)
app.use("/api", blog_route)
app.use("/api/v1/documentation", docRouter);




//port connection
const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`server running on port:${port}`)
}) 