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
app.post('/add',async (req,res) =>{
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        imgURL: req.body.imgURL
    })
     await post.save().then((result) => {
        res.send(result)
    })
        .catch((err) => {
            console.log(err);
        })
})


app.get('/api/all',(req,res) =>{
    Post.find().then((result) => res.send(result)).catch((err) => {console.log(err)})
})


