require("dotenv").config();

function userAuth(req,res,next){
    const passcode = Number(req.body.passcode);
    let expectedPasscode  = Number(process.env.PASSCODE);
    if(passcode===expectedPasscode){
        return next();
    }
    console.log("authorization failed");
    res.status(403).json({
        message:"Authorization failed"
    })
}

module.exports = {
    userAuth
}