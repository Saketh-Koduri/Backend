import cors from 'cors';
import express from 'express';
import { connectToDB,db } from "./db.js";


const app = express()
app.use(cors())
app.use(express.json())

app.post("/signup",async(req,res)=>{
    const {username, password} = req.body;
    
    console.log(req.body)
    let v=await db.collection("signin").insertOne(req.body);
    
        res.json("login succesful")
})

connectToDB(() => {
    app.listen(9000, () => {
        console.log("server running at 9000");
    })
})