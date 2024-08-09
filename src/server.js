import cors from 'cors';
import express from 'express';
import { connectToDB,db } from "./db.js";


const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json("naa server baga run avvuthundhi roiii!");
})

app.post('/insert', async(req, res) => {
    await db.collection("ast").insertOne(req.body)
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

app.post('/insertmany', async(req, res) => {
    await db.collection("ast").insertMany(req.body)
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

app.post('/delete', async(req, res) => {
    await db.collection("ast").deleteOne(req.body)
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

app.post('/deleteMany', async(req, res) => {
    await db.collection("ast").deleteMany(req.body)
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

app.post('/update', async(req, res) => {
    await db.collection("ast").updateOne({Name:req.body.Name},{$set:{Age:req.body.Age }})
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

app.post('/find', async(req, res) => {
    await db.collection("ast").findOne(req.body)
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

app.post('/findmany', async(req, res) => {
    await db.collection("ast").find(req.body).toArray()
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

app.post('/login', async(req, res) => {
    const {username, password} = req.body;
    let v=await db.collection("ast").findOne({username})
    if (v.password===password){
        res.json("login succesful")
    }
    else{
        res.json("login failed")
    }
})

connectToDB(() => {
    app.listen(9000, () => {
        console.log("server running at 9000");
    })
})