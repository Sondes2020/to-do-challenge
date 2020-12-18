import React,{useState} from 'react'

     const Todo = ({el,handleDelete, handleComplete, handleEdit,handleSave }) => {
         const[editText, setEditText]= useState(el.text)
            // 3333
            const delet=()=>{
                handleDelete(el.id)
            }
            // 3333
            const complete=()=>{
                handleComplete(el.id)
            } 
            //333
            const edit=()=>{
                handleEdit(el.id)
            }
            //333
            const save=()=>{
                handleSave(el.id, editText)
            }
    return (
        <>
   
        {
            el.edit? (
<div> 
    <input type="text" value={editText} onChange={(e)=>setEditText(e.target.value)} />
    <button>cuncel</button>
    <button onClick={save}>save</button>
</div>
 )
 :(
     <div
     style={{
        display:"flex",
       alignItems:"center",
       justifyContent:"center"
   }}  
     >
             <p style={el.complete? {textDecoration:"line-through"}:{textDecoration:"none"}}> {el.text} </p> 
             <button onClick={delet}> delete</button>
             <button onClick={complete}> {el.complete?"undo": "complete" } </button>
             <button onClick={edit} >edit</button>
        </div>
            )
        }
         </> 
        
    );
};
export default Todo; 
