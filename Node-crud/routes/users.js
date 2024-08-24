const {createone} = module.require("../controllers/users");


const fs = module.require('fs');
const express = module.require('express')
const router=express.Router();
const app = express()
app.use(express.json())
// router.get('/',getall)
router.post('/',createone)

module.exports=router;