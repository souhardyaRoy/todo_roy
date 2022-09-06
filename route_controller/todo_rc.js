const express = require('express');
const router = express.Router();
const Todo = require('../module/todo_model');


router.get('/', (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const skip = (page - 1) * limit;
  Todo.find()
    .skip(parseInt(skip))
    .limit(parseInt(limit)).then(data=>{
        res.json({data:data})
    }).catch(error=>{
        res.json({data:error})
    })
});


router.post('/create', (req, res) => {
    const todoobj = new Todo(request.body);
    Todo.create(todoobj).then(data => {
        return res.status(201).json(
           {
            data:data
           }
        )
    }).catch(err => {
        return response.status(400).json(
           {data:err}
        )
    });
});


router.put('/:id', (req, res) => {
    const id = req.params.id;
    const {title,content,completed}=req.body
  Todo.findByIdAndUpdate(id,{title,content,completed}).then(data=>{
    return res.json({
        data:data
    }).catch(err => {
        return response.status(400).json(
           {data:err}
        )
    });
  })
});


router.delete('/:id', (req, res) => {
    const id = req.params.id;
  Todo.findByIdAndDelete(id).then(data=>{
    return res.json({
        data:data
    }).catch(err => {
        return response.status(400).json(
           {data:err}
        )
    });
  })
});

module.exports = router;