const {Router} = require("express");
const todosRoute = Router()
const {marriageModel} = require("../models/marriages.model.js")



marriagesRoute.get("/", async (req, res) => {
       let result = await marriageModel.find({ User_Id: req.body.User_Id });
       res.send({result});
    
  });

marriagesRoute.post("/create", authentication, async (req, res) => {
  
     const {name, Status, Tag, User_Id} = req.body
 console.log(name, Status, Tag, User_Id)
    let result = new marriageModel(
      {
        name, Status, Tag, User_Id
    }
    ); 
    await result.save();
    res.send({result}); 
    
  });

  



todosRoute.patch("/:name", authentication, async (req, res) => {
  const data = req.body
 const name = req.params.name;
  
    let result = await todoModel.updateOne(
      { User_Id: req.body.User_Id, name:name },    { $set: data }    );

   if(result.modifiedCount===0){
    res.send({"msg":"No Such Task present"})
   }else{
    res.send({"msg":"Task Updated"})
   };
   
 });


 todosRoute.delete("/:name", authentication ,async (req, res) => {
    const name = req.params.name;
      let result = await todoModel.deleteOne({
        name: name,
        User_Id: req.body.User_Id,
      });


      
      if(result.deletedCount===0){
        res.send({"msg":"No Such Task present"})
    }else{
        res.send({"msg":"notes Deleted"});
    }     
      
    
  });






































  todosRoute.get("/todos", authentication, async (req, res) => {
       let result = await todoModel.find({ User_Id: req.body.User_Id, Status:req.query.status});
    res.send({result});  
  
});

todosRoute.get("/todos", authentication, async (req, res) => {
  let result = await todoModel.find({ User_Id: req.body.User_Id, Status:req.query.status, Tag:req.query.tag});
res.send({result});  
 
});

todosRoute.get("/:todoID ", authentication, async (req, res) => {
  let result = await todoModel.find({ User_Id: req.params.User_Id,});
res.send({result});  

});




module.exports={todosRoute} 