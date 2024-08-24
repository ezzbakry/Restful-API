const fs=module.require("fs")
const todosmodel=module.require("../models/todos")

const getall=(req,res)=>{
    let b=JSON.parse(fs.readFileSync("./todo.json","utf-8"))
    res.send(b)

}

const getByid=(req,res)=>{
    let id = req.params.id;
    let todos=JSON.parse(fs.readFileSync("./todo.json","utf-8"))
    let todo= todos.find((todo)=> todo.id == id)
    if(todo){
        res.json({todo :todo})
    }else{
        res.json({message : "SORRY there is no todo Found with this id"})
    }
}
const updateOne=(req,res)=>
    {
        let id = req.params.id;
       // console.log(req.body);
        console.log(id);
        let {title} = req.body;
        let todos= JSON.parse(fs.readFileSync("./todo.json", "utf8"));
        let todo= todos.find((todo)=> todo.id == id)
        if(todo)
        {
         todo.title = title;
         fs.writeFileSync("./todo.json",JSON.stringify(todos));
         res.json({message:"Edited ", data :todo})
        }else{
            res.json({message : "SORRY there is no todo Found with this id"})
        }
    
    
    }

const createOne=(req,res)=>{
    let newtodo=req.body
    let insertedtodo= todosmodel.create(newtodo).then(()=>{
        res.json({message:"created",data:insertedtodo})


    }).catch(()=>{
        res.json({message:"can not be created"})
    })

    // let todos= JSON.parse(fs.readFileSync("./todo.json", "utf8"));
    // todos.push({id:id,title:title})
    // fs.writeFileSync("./todo.json",JSON.stringify(todos));
    // res.json({message:"Added"})
}    

const deleteOne=(req,res)=>{
    let id=req.params.id;
    let todos= JSON.parse(fs.readFileSync("./todo.json", "utf8"));
    for(var i=0;i<todos.length;i++){
        if(todos[i].id==id){
            let index=todos.indexOf(todos[i])
            todos.splice(index,1)
        }
    }
    fs.writeFileSync("./todo.json",JSON.stringify(todos));
    res.json({message:"deleted"})
}
module.exports={getall,getByid,updateOne,createOne,deleteOne}