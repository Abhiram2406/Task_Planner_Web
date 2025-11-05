import React,{ useState } from 'react'
import '../App.css'
import { TiArchive } from "react-icons/ti";
import { VscEdit } from "react-icons/vsc";
import Home from "./Home"

function Task(props) {
    const [count, setcount] = useState(0)
    let handle_change=()=>{
        props.on_change()
        props.render()
    }
   
    let cross_activater= props.stat?'line-through pointer-events-none':'pointer-events-none'
    let check_activater=props.stat? true : false
    
  return (
    <div className='flex wrap-anywhere justify-between items-center m-2.5'>
      <div className='flex'>
        <input onChange={handle_change} checked={check_activater} type="checkbox" name="checkbox" id="checkbox" className='cursor-pointer mr-1'/>
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
