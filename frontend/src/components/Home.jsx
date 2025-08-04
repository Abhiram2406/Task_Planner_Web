import React,{ useState } from 'react'
import '../App.css'
import { VscAccount } from "react-icons/vsc";
import  Task  from "../components/Task";

function Home() {
    const [Todo, setTodo] = useState("")
    const [Todos, setTodos] = useState([])
    const [logout, setlogout] = useState(false)

    let logoutclass=logout? ' bg-zinc-400 pl-2 pr-2 py-2 rounded-[12px] cursor-pointer' : 'hidden'

    let write_todo=(e)=>{
        setTodo(e.target.value)
        console.log(e.target.value)
    }
    let add_todo=()=>{
        let new_todos=[...Todos,{id:Math.random(),text:Todo,iscompleted:false}]
        setTodos(new_todos)
        console.log(new_todos)
        setTodo("")
    }
    let check_state=(id)=>{
        let Todoos= Todos.map((e)=>(
            e.id===id? {...e,iscompleted:!e.iscompleted} :e
        ))
        setTodos(Todoos)
    }
    let edit_todo=(id)=>{
      let to_find=Todos.find(Todo=>Todo.id===id).text
      let naya_Todos=Todos.filter(Todo=>Todo.id!==id)
      setTodos(naya_Todos)
      setTodo(to_find)
    }
    let delete_todo=(id)=>{
      let good_Todos=Todos.filter(Todo=>Todo.id!==id)
      setTodos(good_Todos)
    }
    let check_key=(e)=>{
      if(e.key==='Enter') {
        console.log("clicked")
        document.getElementById('hello').click()
      }
    }
    let show_logout=()=>{
      setTimeout(() => {
        setlogout(!logout)
      }, 24);
      
    }

  return (
    <div>
      <div className='bg-sky-900 min-h-screen p-4 flex flex-col justify-center items-center gap-2'>
        <h1 className='text-sky-200 text-center text-5xl font-sans'>Task Planner</h1>
        <div className='bg-gray-200 w-[75vw] h-[75vh] rounded-4xl px-4 pt-1 overflow-hidden pb-[10px]'>
          <div className='flex items-center'>
            <VscAccount onClick={show_logout} size={24} className='mt-5 mb-3 cursor-pointer' />
            <button className={logoutclass}>Log out</button>
            </div>
            <div className='flex gap-4 items-center w-[75vw] overflow-hidden'>
                <div className='min-w-1/2 min-h-[450px] bg-zinc-400 rounded-2xl p-3 text-center overflow-y-auto'>
                 <h2 className='text-black mb-4'>Your Tasks</h2>
                 {Todos.map((e) => (
                    <Task key={e.id} todo={e.text} on_change={()=>check_state(e.id)} on_edit={()=>edit_todo(e.id)} on_delete={()=>delete_todo(e.id)}/>
                ))}
                 </div>

                 <div className='min-w-45/100 min-h-[450px] rounded-2xl p-3 text-center overflow-y-auto overflow-x-hidden'>
                    <h2 className='text-black font-[600] mb-4'>Add Task</h2>
                    <input onKeyDown={(e) => check_key(e)} onChange={write_todo} value={Todo} type="text" name="Add-task" id="Add-task" placeholder='Add a new task' className='border-[2px] border-zinc-400 min-w-full rounded-[5px] p-2' />
                    <button id='hello' onClick={()=>{Todo.length!==0 && add_todo()}} type="submit" className='text-center mt-4 bg-sky-800 text-sky-300 p-3 rounded-3xl cursor-pointer'>That's it!</button>
                 </div>
           </div>
            
      </div>
      </div>
    </div>
  )
}

export default Home
