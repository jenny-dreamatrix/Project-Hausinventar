import "./config/config.js"
import "./models/index.js"
import express from "express"
import cors from "cors"
import userRouter from "./controller/user.js"
import bigstuffRouter from "./controller/bigstuff.js"
import midstuffRouter from "./controller/midstuff.js"
import smallstuffRouter from "./controller/smallstuff.js"

const app = express()
const PORT = 3001

app.use(express.json())
app.use(cors())

app.use("/api/users", userRouter)
app.use("/api/bigstuff", bigstuffRouter)
app.use("/api/notsobigstuff", midstuffRouter)
app.use("/api/smallstuff", smallstuffRouter)

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`))