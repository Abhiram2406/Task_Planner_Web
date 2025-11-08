const express = require("express");
const cors=require("cors")
const mongoose = require('mongoose');
const Todo = require('./models/Todo');
const app = express();
const port = 5000;
const envvar=require("dotenv").config();

app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());

async function main() {
  // console.log(process.env.MONGO_URI);
  let conn = await mongoose.connect(process.env.MONGO_URI);
}
main().catch(err => console.error(err));

app.get("/all-todos", async (req, res) => {
  const todo=await Todo.find()
  res.send(todo)
})
app.patch("/todos/:id",async(req,res)=>{
  try{
    let id=req.params.id;
    let {iscompleted}=req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { iscompleted },
      { new: true } 
    );
    
  }catch(error){
    console.log(error)
  }
  
})
app.post("/add-todos",
  async (req, res) => {
    // console.log(req.body)
    try {
      let tod = new Todo({
        Text:req.body.text,
        iscompleted:false
      });
      await tod.save();
      res.json(tod);
      // console.log("success")
    }
    catch (err) {
      res.status(500).json({ error: err.message });
    }

  })
  app.delete("/todos/:id", async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    }
    catch(err) {
      console.log(err)
    }})
app.get("/", (req, res) => {
  res.send("server working good")
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
