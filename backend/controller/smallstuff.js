import "../config/config.js"
import "../models/index.js"
import express from "express"
import multer from "multer"
import { SmallStuff } from "../models/StuffModel.js"
import {v2 as cloudinary} from 'cloudinary';

const smallstuffRouter = express.Router()
const img_upload = multer({ storage: multer.memoryStorage() })


// get all
smallstuffRouter.get("/", async (req, res) => {
    try {
        const { room, sortBy } = req.query
        let dbRes = await SmallStuff.find()
        let responseData = [...dbRes]
        
        if (room){
            responseData = [...responseData].filter((item) => {
                return item.room.toLocaleLowerCase() === room
            })
        }

        // sort by title ist default - man kann wählen ob A-Z oder Z-A
        if (sortBy == "AZ"){
            responseData = [...responseData].sort((itemA, itemB) => {
                let x = itemA.title.toLocaleLowerCase()
                let y = itemB.title.toLocaleLowerCase()
                if (x < y) return -1
                else if (x > y) return 1
                return 0
            })
        }
        if (sortBy == "ZA"){
            responseData = [...responseData].sort((itemA, itemB) => {
                let x = itemA.title.toLocaleLowerCase()
                let y = itemB.title.toLocaleLowerCase()
                if (x < y) return 1
                else if (x > y) return -1
                return 0
            })
        }
        res.json(responseData)
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})

// get one by id
smallstuffRouter.get("/:id", async (req, res) => {
    try {
        const dbRes = await SmallStuff.findById(req.params.id)
        res.json(dbRes)
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})

// create new item
smallstuffRouter.post("/", img_upload.single("image"), async (req, res) => {
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
smallstuffRouter.put("/:id", async (req, res) => {
    try {
        const dbRes = await SmallStuff.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(dbRes)
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})

// delete by id
smallstuffRouter.delete("/:id", async (req, res) => {
    try {
        const dbRes = await SmallStuff.findByIdAndDelete(req.params.id)
        cloudinary.uploader.destroy(dbRes.image?.imageId, (err) => console.log(err))
        res.send("item was deleted")
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})

export default smallstuffRouter;