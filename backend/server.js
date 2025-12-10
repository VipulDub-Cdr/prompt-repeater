require("dotenv").config();

const express = require("express")
const cors = require("cors");
const app = express();
const port = 3000;
const { GoogleGenerativeAI } = require("@google/generative-ai");
const {userAuth} = require("./middleware.js")
const transporter = require("./email.js");
const model = require("./db.js");

app.use(express.json());
app.use(cors());
app.use(userAuth);

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

app.post("/api/v1",async (req,res)=>{
    const {prompt, solution} = req.body;
    const result = await model.generateContent(prompt + "\n\n" + solution);
    res.send({
            response: result.response.text()
        });
})

app.post("/api/v1/sendmail", async (req,res)=>{
    const {to, subject, message} = req.body;
    try {await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        html: `<h4>${message}</h4>`
    })
    res.json({ success: true, message: "Email sent successfully!" });}
    catch(err){
        console.log(err);
        res.status(500).json({ success: false, message: "Failed to send email" });
    }
})

app.use((err,req,res,next)=>{
    res.status(500).json({
        message:"error occurred",
    })
})

app.listen(port,()=>{
    console.log("server started on port 3000")
})