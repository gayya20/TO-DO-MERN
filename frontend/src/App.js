import ToDo from "./components/ToDo";
import { useState, useEffect } from "react";
import { addToDo, getAllToDo, updateToDo,deleteToDo } from "./utils/HandleApi";

function App() {

  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [toDoId, setToDoId] = useState(''); // Corrected from 'toDOId' to 'toDoId'

  const updateMode = (_id, text) => {
    setIsUpdate(true);
    setText(text);
    setToDoId(_id); // Corrected from 'setToDOId' to 'setToDoId'
  }

  useEffect(() => {
    getAllToDo(setToDo); 
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>

        <div className="top">
          <input 
            type="text" 
            placeholder="Add a task" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          />

          <div 
            className="add" 
            onClick={() => 
              isUpdate 
              ? updateToDo(toDoId, text, setToDo, setText, setIsUpdate) 
              : addToDo(text, setText, setToDo)
            }
          >
            {isUpdate ? 'Update' : 'Add'}
          </div>
        </div>

        <div className="list">
          {toDo.map((item) => (
            <ToDo 
              key={item.id} 
              text={item.text} 
              updateMode={() => updateMode(item._id, item.text)} 
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
