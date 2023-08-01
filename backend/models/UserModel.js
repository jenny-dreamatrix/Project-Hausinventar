import mongoose from "mongoose"
import { BigStuff, MidStuff, SmallStuff } from "./StuffModel.js"

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: {
            url: String,
            imageId: String
        },
    },
    inventoryBig: [{
        // ref: "bigstuff" -> den Namen von der Collection hier angeben! dann wird nur in der Collection nach der Referenz gesucht
        type: mongoose.Types.ObjectId, ref: "bigstuff"
    }],
    inventoryMid: [{
        type: mongoose.Types.ObjectId, ref: "midstuff"
    }],
    inventorySmall: [{
        type: mongoose.Types.ObjectId, ref: "smallstuff"
    }]
})

export const User = mongoose.model("users", userSchema)
