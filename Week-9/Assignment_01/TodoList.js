import React from 'react';


const Todoslist=({todos, setTodos, setEditTodo})=>{

    //it will return updated todo after making changes in edit.
    const handleComplete=(todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id===todo.id){
                    return {...item,completed: !item.completed};
                }
                return item;
            })
        );

    }

    //function to handle edit operation
    const handleEdit=({id})=>{
        //it will return id which matches with todo id.
        const findtodo= todos.find((todo)=>todo.id===id);
        setEditTodo(findtodo);
    }
    //function to perform delete operation
    const handleDelete= ({ id })=>{
        //it will only filter whose id will not match with Todo id
        setTodos(todos.filter((todo)=>todo.id!==id));
    };
    //componenet will return ->
    //1- <li className="list-item" key={todo.id}>---< here will get help us to get the item which id had changed
    //2- onChange={(event)=>event.preventDefault()----> it is used to prevent default behaviour of onChange method.
    //3- then we are calling button methids and assigning them icons and handling events on them.
    return(
        <div>
            {todos.map((todo)=>(
                <li className="list-item" key={todo.id}>
                    <input
                    type="text"
                    value={todo.title}
                    className={`list" ${todo.completed ? "complete" : ""}`}
                    onChange={(event)=>event.preventDefault()}
                    />
                    <div>
                        <button className="button-complete task-button" onClick ={()=> handleComplete(todo)}>
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button className="button-edit task-button" onClick ={()=>handleEdit(todo)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete task-button" onClick ={()=>handleDelete(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>

                    </div>
                </li>
            ))}

        </div>
    )
}

export default Todoslist;