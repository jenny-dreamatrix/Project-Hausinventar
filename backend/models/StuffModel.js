import mongoose from "mongoose";

const stuffSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    room: {
        type: String,
        required: true
    },
    image:{
        type: {
            url: String,
            imageId: String
        },
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

export const BigStuff = mongoose.model("bigstuff", stuffSchema)
export const MidStuff = mongoose.model("midstuff", stuffSchema)
export const SmallStuff = mongoose.model("smallstuff", stuffSchema)