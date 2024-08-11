import cors from 'cors';
import express from 'express';
import { connectToDB,db } from "./db.js";
import e from 'cors';


const app = express()
app.use(cors())
app.use(express.json())

app.post("/signin",async(req,res)=>{
    const {email, password} = req.body;
    console.log(req.body)

    let v=await db.collection("signin").findOne({email});
    console.log(v.password)
    if (v && v.password===password){
        
        res.json("login succesful")
    }
    else{
        res.json("login failed")
    }
})

app.post("/signup",async(req,res)=>{
    const {email, password} = req.body;
    console.log(req.body)
    if (await db.collection("signin").findOne({email})){
        res.json("email already exists")
    }
    else{
    let v=await db.collection("signin").insertOne(req.body);
    
        res.json("registered succesful")
    }
})

app.post("/forgot-password",async(req,res)=>{
    const {email,password}=req.body;
    let v=await db.collection("signin").findOne({email})
    if (!v){
        res.json("email does not exist")
    }
    else{
        await db.collection("signin").updateOne({email},{$set:{password}})
        res.json("password updated")
    }
})

connectToDB(() => {
    app.listen(9000, () => {
        console.log("server running at 9000");
    })
})