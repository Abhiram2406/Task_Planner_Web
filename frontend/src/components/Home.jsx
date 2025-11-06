import React,{ useState,useEffect } from 'react'
import '../App.css'
import { VscAccount } from "react-icons/vsc";
import  Task  from "../components/Task";

function Home() {
  const [count, setcount] = useState(0)
    const [Todo, setTodo] = useState("")
    const [Todos, setTodos] = useState([])
    const [logout, setlogout] = useState(false)
    

    useEffect(() => {
  fetch("http://localhost:5000/all-todos")
    .then(res => res.json())
    .then(data => {
      console.log(data); 
      setTodos(data);    
    })
    .catch(err => console.error(err));
},[count]);

    

    let logoutclass=logout? ' bg-zinc-400 pl-2 pr-2 py-2 rounded-[12px] cursor-pointer' : 'hidden'

    let write_todo=(e)=>{
        setTodo(e.target.value)
    }
    let add_todo=async()=>{
       await fetch("http://localhost:5000/add-todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: Todo
    })
  })
         setTodo("")
         setcount(count+1)
    }
    let check_state=(id)=>{
      let sendid=id;
      
        let Todoos= Todos.find(e=>e._id===id)
        let status=Todoos.iscompleted

        fetch(`http://localhost:5000/todos/${sendid}`, {   
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      iscompleted: !status
    })

})
  .then(res => res.json())
  .then(data => console.log("PATCH response:", data))
  .catch(err => console.error(err));
    }
    let edit_todo=(id)=>{
      let to_find=Todos.find(Todo=>Todo._id===id)
      setTodo(to_find.Text)
      delete_todo(id)
      setcount(count+1)
    }
    let delete_todo=(id)=>{
      let idd=id
      fetch(`http://localhost:5000/todos/${idd}`,{
       method:"DELETE" })
      setcount(count+1)
    }
    let check_key=(e)=>{
      if(e.key==='Enter') {
        console.log("clicked")
        document.getElementById('hello').click()
      }
    }
    // let show_logout=()=>{
    //   setTimeout(() => {
    //     setlogout(!logout)
    //   }, 24);
      
    // }
    let changecount=()=>{
      setcount(count+1);
    }

  return (
    <div>
      <div className='bg-sky-900 min-h-screen p-4 flex flex-col justify-center items-center gap-2 overflow-y-hidden'>
        <h1 className='text-sky-200 text-center text-5xl font-sans'>Task Planner</h1>
        <div className='bg-gray-200 w-[75vw] h-[75vh] rounded-4xl px-4 pt-1 overflow-y-hidden overflow-x-hidden pb-[10px]'>
          <div className='flex items-center'>
            <VscAccount  size={24} className='mt-5 mb-3 cursor-pointer' />
            <button className={logoutclass}>Log out</button>
            </div>
            <div className='flex gap-4 items-center w-[75vw] h-[85%]'>
                <div className='min-w-1/2 h-[99%] bg-zinc-400 rounded-2xl p-3 text-center overflow-y-auto'>
                 <h2 className='text-black mb-4'>Your Tasks</h2>
                 {Todos.map((e) => (
                    <Task key={e._id} render={()=>changecount()} todo={e.Text} stat={e.iscompleted} on_change={()=>check_state(e._id)} on_edit={()=>edit_todo(e._id)} on_delete={()=>delete_todo(e._id)}/>
                ))}
                 </div>

                 <div className='min-w-45/100 min-h-[450px] rounded-2xl p-3 text-center overflow-y-auto overflow-x-hidden'>
                    <h2 className='text-black font-[600] mb-4'>Add Task</h2>
                    <input onKeyDown={(e) => check_key(e)} onChange={write_todo} value={Todo} type="text" name="Add-task" id="Add-task" placeholder='Add a new task' className='border-[2px] border-zinc-400 min-w-[90%] rounded-[5px] p-2' />
                    <button id='hello' onClick={()=>{Todo.length!==0 && add_todo()}} type="submit" className='text-center mt-4 bg-sky-800 text-sky-300 p-3 rounded-3xl cursor-pointer'>That's it!</button>
                 </div>
           </div>
            
      </div>
      </div>
    </div>
  )
}

export default Home
