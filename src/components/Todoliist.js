import React from "react"
import Todo from "./Todo"; 

 const Todoliist = ({todos, handleDelete,handleComplete,  handleEdit, handleSave}) => {
    return (
        <div>
            { todos.map(el=> <Todo key={el.id} el={el} handleDelete={handleDelete} handleComplete={handleComplete}  handleEdit={ handleEdit} handleSave={handleSave} /> )}
        </div>
    )
}
export default Todoliist; 