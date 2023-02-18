import React from 'react'
import './FormStyle.css'
import { useState } from 'react'
export default function FormsInputs(props) {

    const[title,seTtitle]=useState('')

    const changeEvent=(event)=>{
        
        console.log(event.target.value)
        seTtitle(event.target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault()
        alert(title)
        
    }
    

  return (
    <div>
      <form onSubmit={onSubmit} className="fathercont" >
        <input type="text" className='TxtForm' onChange={changeEvent}/>
        <div className="titleC">
            {title}
        </div>
        <button type='submit'>click</button>
      </form>
    </div>
  )
}
