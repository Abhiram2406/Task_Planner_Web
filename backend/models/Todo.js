const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
   Text: {type: String, required: true},
  iscompleted:{type:Boolean,required:true}  
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;