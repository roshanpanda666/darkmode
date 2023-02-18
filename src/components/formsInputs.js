import React from 'react'
import './FormStyle.css'
import { useState } from 'react'
export default function FormsInputs(props) {

    const[title,seTtitle]=useState('')


    const onSubmit=(event)=>{
        event.preventDefault()

        seTtitle(event.target.value)
    }
    

  return (
    <div>
      <form onSubmit={onSubmit} className="fathercont" >
        <input type="text" className='TxtForm' value={title}/>
        <div className="titleC">
            {title}
        </div>
        <button type='submit'>click</button>
      </form>
    </div>
  )
}
