import React, { useState } from 'react';

const List = (props) => {
    const [todo, setTodo] = useState("");
    const [todoArr, setTodoArr] = useState([]);

    const handleAddTodo = (e) =>{
        e.preventDefault();
        const newTodoObj = {
            todo: todo,
        };
        setTodoArr([newTodoObj, ...todoArr]);
        setTodo("");


    }
    const handelRemoveTodo = (index) =>{
        const newArr = todoArr.filter((item, idx) => idx !== index);
        setTodoArr(newArr);
    }
    return(
        <div>

            <h1>Create Todo List:</h1>
            <form onSubmit={(e) => handleAddTodo(e)}>
                <label>Todo: </label>
                <input type="text" value={todo} name="todo" onChange={ (e) => setTodo(e.target.value) } />
                <button>Add</button>


            </form>

            {todoArr.map((item, index) => (
                <div key={index}>
                    <p>Number: {index +1} Todo: {item.todo} <input type="checkbox"></input>
                    <button
                     style={{backgroundColor:"yellow", color:"red", borderRadius: 5, marginLeft: 5}}
                     onClick={()=> handelRemoveTodo(index)}
                    
                    >
                        
                        
                        Delete
                    </button>
                    </p>
                    




                </div>
            ))}



          




        </div>




    )
}

export default List;
            






