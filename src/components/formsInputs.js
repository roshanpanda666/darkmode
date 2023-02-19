import React from 'react'
import './FormStyle.css'
import { useState } from 'react'
export default function FormsInputs(props) {

    const[title,seTtitle]=useState('')
    const[name,updateName]=useState('')

    const onSubmit=(event)=>{
        event.preventDefault()

        seTtitle(event.target.value)
    }

    const clicked=()=>{
      updateName(title)
    }
    

  return (
    <div>
      
        <input type="text" className='TxtForm'onChange={onSubmit} value={title}/>
        <div className="titleC">
            {name}
        </div>
        <button onClick={clicked} >click</button>
      
    </div>
  )
}
