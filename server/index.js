import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const CONNECTDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_DB);

    if (conn) {
        console.log("mongoDB connected")
    }
}

app.get("/",(req,res)=>{
    res.json({status:"OK",message:"server is healthy"});

});

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
console.log(`server has started on port ${PORT}`);
CONNECTDB();
});