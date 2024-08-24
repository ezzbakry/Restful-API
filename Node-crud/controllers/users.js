const fs=module.require("fs")
const usermodel=module.require("../models/users.js")
// const getall=(req,res)=>{
//     let users=JSON.parse(fs.readFileSync("../users.json","utf-8"))
//     res.send(users)

// }

const createone = (req,res)=>{
    let newuser=req.body
    console.log(newuser)
    let inserteduser=usermodel.create(newuser).then(()=>{
        res.json({message:"created",data:newuser})
    }).catch((err)=>{
        res.json({message:"can not be created",error:err.message})
    })
    
}

module.exports={createone}