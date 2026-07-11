import express from "express"
import {createServer} from "node:http"
import {Server} from "socket.io"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import connectToSocket from "./controllers/socketManager.js"
import userRoutes from "./routes/users.routes.js"

dotenv.config();

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port",(process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit:"40kb"}))
app.use(express.urlencoded({limit:"40kb",extended:true}));

app.use("/api/v1/users",userRoutes);

app.get("/home",(req,res)=>{
    return res.json({"hello":"world"})
});

const start = async () => {
    try {
        const mongoUri = process.env.MONGO_URI || "mongodb://vaibhavsanmani5_db_user:72DbAfVsWOY0xNY7@ac-a5emr2e-shard-00-00.bbaip1j.mongodb.net:27017,ac-a5emr2e-shard-00-01.bbaip1j.mongodb.net:27017,ac-a5emr2e-shard-00-02.bbaip1j.mongodb.net:27017/?ssl=true&replicaSet=atlas-12akzl-shard-0&authSource=admin&appName=meetflow";

        await mongoose.connect(mongoUri);
        server.listen(app.get("port"), () => {
            console.log(`Listening on port ${app.get("port")}`);
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
}

start();