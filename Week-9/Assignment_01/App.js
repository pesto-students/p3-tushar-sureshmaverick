import React, {useState} from 'react';
import './App.css';
import Cheader from "./Component/Cheader"
import Form from './Component/Form'
import Todoslist from './Component/TodoList';



const App =()=>{
  const [input, setInput]=useState("");
  const [todos, setTodos]=useState([]);
  const [editTodo, setEditTodo]= useState(null);


  return(
     <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Cheader/>
          </div>
          <div>
            <Form input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            />
          </div>
          <div>
            <Todoslist todos ={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
          </div>

      </div>
     </div>
  );
}


export default App;