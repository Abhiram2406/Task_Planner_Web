import React,{ useState } from 'react'
import '../App.css'
import { TiArchive } from "react-icons/ti";
import { VscEdit } from "react-icons/vsc";
import Home from "./Home"

function Task(props) {
    const [cross, setcross] = useState(false)
    let handle_change=()=>{
        props.on_change()
        setcross(!cross)
        console.log(cross)
    }
    let cross_activater= cross?'line-through':''
  return (
    <div className='flex justify-between items-center m-2.5'>
      <div>
        <input onChange={handle_change} type="checkbox" name="checkbox" id="checkbox" className='cursor-pointer mr-1'/>
        <label className={cross_activater} htmlFor="checkbox">{props.todo}</label>
        
      </div>
        <div className='flex gap-3'>
            <VscEdit className='cursor-pointer' onClick={props.on_edit} />
            <TiArchive className='cursor-pointer' onClick={props.on_delete} />
        </div>
    </div>
  )
}

export default Task
