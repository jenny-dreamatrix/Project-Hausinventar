import "../config/config.js"
import "../models/index.js"
import express from "express"
import multer from "multer"
import { User } from "../models/UserModel.js"
import {v2 as cloudinary} from 'cloudinary';

const userRouter = express.Router()
const img_upload = multer({ storage: multer.memoryStorage() })


// get all user accounts
userRouter.get("/", async (req, res) => {
    try{
        const dbRes = await User.find()
        res.json(dbRes)
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})

// get one user account by id
userRouter.get("/:id", async (req, res) => {
    try{
        const dbRes = await User.findById(req.params.id)
        res.json(dbRes)
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})


// wenn man einen neuen user hinzufügen will (registrieren), soll man das mit name, email und passwort machen können - OHNE BILD
// create new user account muss also ohne cloudinary sein
// das bild soll man im Nachhinein auf seinem profil hinzufügen können (updaten) -> PUT route

// create new user account
// userRouter.post("/", img_upload.single("image"), async (req, res) => {
//     try{
//         cloudinary.uploader.upload_stream({resource_type: "image", folder: "Hausinventar_Users" }, async (err, result) => {
//             const dbRes = await User.create({ ...req.body, image: { url: result.secure_url, imageId: result.public_id } })
//             res.json(dbRes)
//         }).end(req.file.buffer)
//     } catch(err){
//         console.log(err);
//         res.send("there was an error")
//     }
// })

// create new user account
userRouter.post("/", async (req, res) => {
    try{
        const dbRes = await User.create(req.body)
        res.json(dbRes)
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})



// update user account by id
// userRouter.put("/:id", async (req, res) => {
//     try{
//         const dbRes = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
//         res.json(dbRes)
//     } catch(err){
//         console.log(err);
//         res.send("there was an error")
//     }
// })


// mit query arbeiten, um festzustellen ob image vorhanden ist? wenn nicht, dann ohne cloudinary

// FRAGE: WENN ICH DIE ROUTE MIT CLOUDINARY SCHREIBE; MUSS EIN BILD HINZUGEFÜGT WERDEN WEIL SONST ERROR??

// update user account by id
userRouter.put("/:id", img_upload.single("image"), async (req, res) => {
    try{
        cloudinary.uploader.upload_stream({resource_type: "image", folder: "Hausinventar_Users" }, async (err, result) => {

            const dbRes = await User.create({ ...req.body, image: { url: result.secure_url, imageId: result.public_id } })
            res.json(dbRes)

        }).end(req.file.buffer)

        const dbRes = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})

    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})

// delete user account by id
userRouter.delete("/:id", async (req, res) => {
    try{
        const dbRes = await User.findByIdAndDelete(req.params.id)
        cloudinary.uploader.destroy(dbRes.image?.imageId, (err) => console.log(err))
        res.send("user account was deleted")
    } catch(err){
        console.log(err);
        res.send("there was an error")
    }
})

export default userRouter;