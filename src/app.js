import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser" 

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,//which origins is allowed
    credentials: true,
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true,limit:"16kb"})) //nested object can be send
app.use(express.static("public")) //to serve static files
app.use(cookieParser()) //middleware to parse cookies



export { app }