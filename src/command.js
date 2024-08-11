import cors from 'cors';
import express from 'express';
import { connectToDB,db } from "./db.js";


const app = express()
app.use(cors())
app.use(express.json())

app.post('/query1', async(req, res) => {
    let v=await db.collection("ast").find({ age: { $gte: 30 } }).count()
    res.json(v)
})

app.post('/query2', async(req, res) => {
    let v=await db.collection("ast").find({ Name: { $in: ['John', 'Mary'] } }).toArray()
    res.json(v)
})

app.post('/query3', async(req, res) => {
    let v=await db.collection("ast").find({ hobbies: 'Reading' }).toArray()
    res.json(v)
})

app.post('/query4', async(req, res) => {
    let v=await db.collection("ast").find({ salary: { $gt: 60000 } }).toArray()
    res.json(v)
})

app.post('/query5', async(req, res) => {
    let v=await db.collection("ast").find({ city: { $in: ['New York', 'Los Angeles'] } }).toArray()
    res.json(v)
})

app.post('/query6', async(req, res) => {
    let v=await db.collection("ast").find({ hobbies: { $in: ['Swimming', 'hiking'] } }).toArray()
    res.json(v)
})

app.post('/query7', async(req, res) => {
    let v=await db.collection("ast").find({ age: { $gt: 25, $lt: 35 } }).toArray()
    res.json(v)
})

app.post('/query8', async(req, res) => {
    let v=await db.collection("ast").find({ $and: [{ age: { $gte: 30 } }, { city: 'San Francisco' }] }).toArray()
    res.json(v)
})

app.post('/query9', async(req, res) => {
    let v=await db.collection("ast").find({ $and: [{ age: { $lte: 30 } }, { hobbies: 'cooking' }] }).toArray()
    res.json(v)
})

app.post('/query10', async(req, res) => {
    let v=await db.collection("ast").find({ age: { $ne: 30 } }).toArray()
    res.json(v)
})

app.post('/query11', async(req, res) => {
    let v=await db.collection("ast").find({ $and: [{ city: { $ne: 'Los Angeles' } }, { hobbies: 'reading' }] }).toArray()
    res.json(v)
})

app.post('/query12', async(req, res) => {
    let v=await db.collection("ast").find({ $and: [{ age: { $gte: 25 } }, { $nor: [{ city: 'New York' }, { city: 'Los Angeles'
    }] }] }).toArray()
    res.json(v)
})

app.post('/query13', async(req, res) => {
    let v=await db.collection("ast").find().sort({ salary: -1 }).limit(1).toArray()
    res.json(v)
})

app.post('/query14', async(req, res) => {
    let v=await db.collection("ast").find().sort({ salary: -1 }).skip(1).limit(1).toArray()
    res.json(v)
})

app.post('/query15', async(req, res) => {
    let v=await db.collection("ast").updateMany({}, { $inc: { salary: 5000 } })
    res.json(v)
})

app.post('/query16', async(req, res) => {
    let v=await db.collection("ast").updateMany({ age: { $gt: 30 } }, { $inc: { salary: 5000 } })
    res.json(v)
})

connectToDB(() => {
    app.listen(9000, () => {
        console.log("server running at 9000");
    })
})