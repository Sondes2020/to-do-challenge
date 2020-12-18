import React,{useState} from "react"
import AddTodo from "./components/AddToDo";
import Todolist from "./components/Todoliist";
import "./App.css"; 

 const App = () => {
  const [todos, setTodos]=useState([
    {id:1, complete:false, edit:false, text:"Sondes"},
    {id:0, complete:false, edit:false,  text:"Imen"},
  ])
  //...todos=>"Imen","Sondes"
  //111-define  a callback 
  const handleAdd=(newTodo)=>{
     setTodos([...todos, newTodo])
  }
  // 111
  const handleDelete=(indice)=>{
    setTodos( todos.filter(el=> el.id!==indice))
  }
 //111 
 const handleComplete=(idTodo)=>{
   setTodos(todos.map(el=> el.id===idTodo? {...el,complete:!el.complete}:el ))
 }
 const handleEdit=(idTodo)=>{
   setTodos(todos.map(el=> el.id===idTodo? {...el,edit:!el.edit}:el))
 }
 const handleSave=(idTodo, newText)=>{
   setTodos(todos.map(el=>el.id===idTodo?{...el,text: newText, edit:!el.edit} :el))

 }
  return (
    <div className="App">
     {/*222: pass that callback as a props*/}

      <AddTodo handleAdd={handleAdd}/>
     
      <Todolist todos={todos} 
       // {/*222*/}
      handleDelete={handleDelete} 
      // {/*222*/}
      handleComplete={handleComplete} 
      //{/*222*/}
      handleEdit={handleEdit}
       //{/*222*/}
       handleSave={handleSave}
      />
      
    </div>
  )
}
export default App; 
