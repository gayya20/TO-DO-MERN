const { mongo } = require('mongoose');
const ToDoModel = require('../models/ToDoModel');   
const express = require('express');

module.exports.getToDos = async (req, res) => {
    try {
        const toDos = await ToDoModel.find();
        res.json(toDos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}  

module.exports.saveToDo = async (req, res) => {

    const{text}=req.body;   

    ToDoModel
    .create({text})
    .then((data)=>{
        console.log(data);
        console.log('ToDo created');
        res.send(data);
    })
}

module.exports.updateToDo = async (req, res) => {
    const { _id } = req.body;
    const { text } = req.body;
  
    ToDoModel
    .findByIdAndUpdate(_id, {text}, )
    .then(()=> res.send("update succsessfully"))
    .catch((error)=> console.log(error))
};


module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body;
  
    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.send("delete successfully"))
        .catch((error) => console.log(error));
};

