import axios from 'axios';

const baseURL = 'http://localhost:3000/';

const getAllToDo=(setToDo)=>{
    axios.get(baseURL)
    .then((response)=>{
        setToDo(response.data);
    })
    .catch((error)=>{
        console.log(error);
    });
}

const addToDo=(text,setText,setToDo)=>{
    axios.post(baseURL+'save',{text})
    .then((data)=>{
        console.log(data);
        setText('');
        getAllToDo(setToDo);})
    .catch((error)=>{
        console.log(error);
    });
}


const updateToDo=(toDOId,text,setToDo,setText,setIsUpdate)=>{
    axios.post(baseURL+'update',{_id:toDOId,text})
    .then((data)=>{
        setText('');
        setIsUpdate(false);
        getAllToDo(setToDo);})
    .catch((error)=>{
        console.log(error);
    });
}



const deleteToDo=(_id,setToDo)=>{
    axios.post(baseURL+'delete',{_id})
    .then((data)=>{
       
        getAllToDo(setToDo);})
    .catch((error)=>{
        console.log(error);
    });
}
export {addToDo, getAllToDo, updateToDo,deleteToDo};