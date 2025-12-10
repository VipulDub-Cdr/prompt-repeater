require("dotenv").config();

const express = require("express")
const cors = require("cors");
const app = express();
const port = 3000;
const { GoogleGenerativeAI } = require("@google/generative-ai");
const {userAuth} = require("./middleware.js")

app.use(express.json());
app.use(cors());

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

app.post("/api/v1",userAuth, async (req,res)=>{
    const {prompt, solution} = req.body;
    const result = await model.generateContent(prompt + "\n\n" + solution);
    res.send({
            response: result.response.text()
        });
})

app.use((err,req,res,next)=>{
    res.status(500).json({
        message:"error occurred",
    })
})

app.listen(port,()=>{
    console.log("server started on port 3000")
})