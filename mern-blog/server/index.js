const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const Post = require("./Models/PostModel")

const MONGO_URL = ""  // MongoDB Connection URL

const app = express();
app.use(express.json());
app.use(cors());
app.listen(3030, () => {console.log("Server Running")});


mongoose.connect(MONGO_URL,() =>{console.log("db connected")})




app.get('/',(req,res) =>{res.send("Serrver Runnon")})
app.get('/add',(req,res) =>{
    const post = new Post({
        title,
        content,
        imgURL,
    })
    post.save().then((result) => {
        res.send(result)
    })
        .catch((err) => {
            console.log(err);
        })
})


app.get('/api/all',(req,res) =>{
    Post.find().then((result) => res.send(result)).catch((err) => {console.log(err)})
})


