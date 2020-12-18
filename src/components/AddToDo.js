import React ,{useState} from 'react'

const AddToDo = ({handleAdd}) => {
    const [text, setText]=useState("")
    // 333: call the callback using the props
    const add=()=>{
    handleAdd ({id:Math.random() , text:text, complete:false, edit:false})
    setText("")
    } 
    return (
        <div>
              <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
          <button onClick={add} >add</button>
        </div>
    )
}

export default AddToDo
