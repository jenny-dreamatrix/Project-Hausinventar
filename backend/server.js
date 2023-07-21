import "./config/config.js"
import express from "express"
import cors from "cors"
import "./models/index.js"
import { BigStuff, MidStuff, SmallStuff } from "./models/StuffModel.js"
import multer from "multer"
import {v2 as cloudinary} from 'cloudinary';

const app = express()
const PORT = 3001
const img_upload = multer({storage: multer.memoryStorage() })

app.use(express.json())
app.use(cors())

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUDNAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Routes for BigStuff ------------------------------------------------------------------

// get all
app.get("/api/bigstuff", async (req, res) => {
    try {
        const dbRes = await BigStuff.find()
        res.json(dbRes)
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})

// get one by id
app.get("/api/bigstuff/:id", async (req, res) => {
    try {
        const dbRes = await BigStuff.findById(req.params.id)
        res.json(dbRes)
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})

// create new item
app.post("/api/bigstuff", img_upload.single("image"), async (req, res) => {
    try {
        cloudinary.uploader.upload_stream({ resource_type:"image", folder: "Hausinventar"}, async (err, result) => {
            const dbRes = await BigStuff.create({ ...req.body, image: { url: result.secure_url, imageId: result.public_id } })
            res.json(dbRes)
        }).end(req.file.buffer)
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})

// update by id
app.put("/api/bigstuff/:id", async (req, res) => {
    try {
        const dbRes = await BigStuff.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(dbRes)
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})

// delete by id
app.delete("/api/bigstuff/:id", async (req, res) => {
    try {
        const dbRes = await BigStuff.findByIdAndDelete(req.params.id)
        cloudinary.uploader.destroy(dbRes.image?.imageId, (err) => console.log(err))
        res.send("item was deleted")
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})

// Routes for MidStuff ------------------------------------------------------------------

// get all
app.get("/api/notsobigstuff", async (req, res) => {
    try {
        const dbRes = await MidStuff.find()
        res.json(dbRes)
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})

// get one by id
app.get("/api/notsobigstuff/:id", async (req, res) => {
    try {
        const dbRes = await MidStuff.findById(req.params.id)
        res.json(dbRes)
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})

// create new item
app.post("/api/notsobigstuff", img_upload.single("image"), async (req, res) => {
    try {
        cloudinary.uploader.upload_stream({ resource_type:"image", folder: "Hausinventar"}, async (err, result) => {
            const dbRes = await MidStuff.create({ ...req.body, image: { url: result.secure_url, imageId: result.public_id } })
            res.json(dbRes)
        }).end(req.file.buffer)
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})

// update by id
app.put("/api/notsobigstuff/:id", async (req, res) => {
    try {
        const dbRes = await MidStuff.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(dbRes)
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})

// delete by id
app.delete("/api/notsobigstuff/:id", async (req, res) => {
    try {
        const dbRes = await MidStuff.findByIdAndDelete(req.params.id)
        cloudinary.uploader.destroy(dbRes.image?.imageId, (err) => console.log(err))
        res.send("item was deleted")
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})

// Routes for SmallStuff ------------------------------------------------------------------

// get all
app.get("/api/smallstuff", async (req, res) => {
    try {
        const dbRes = await SmallStuff.find()
        res.json(dbRes)
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})

// get one by id
app.get("/api/smallstuff/:id", async (req, res) => {
    try {
        const dbRes = await SmallStuff.findById(req.params.id)
        res.json(dbRes)
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})

// create new item
app.post("/api/smallstuff", img_upload.single("image"), async (req, res) => {
    try {
        cloudinary.uploader.upload_stream({ resource_type:"image", folder: "Hausinventar"}, async (err, result) => {
            const dbRes = await SmallStuff.create({ ...req.body, image: { url: result.secure_url, imageId: result.public_id } })
            res.json(dbRes)
        }).end(req.file.buffer)
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})

// update by id
app.put("/api/smallstuff/:id", async (req, res) => {
    try {
        const dbRes = await SmallStuff.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(dbRes)
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})

// delete by id
app.delete("/api/smallstuff/:id", async (req, res) => {
    try {
        const dbRes = await SmallStuff.findByIdAndDelete(req.params.id)
        cloudinary.uploader.destroy(dbRes.image?.imageId, (err) => console.log(err))
        res.send("item was deleted")
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`))