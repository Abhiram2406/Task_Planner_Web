import React, { useState } from 'react'

function Signin() {
    const [Signup, setSignup] = useState(false)
    const [Signin, setSignin] = useState(true)

    let ClassDeciderSignin = !Signin ? 'hidden' : 'bg-gray-400 max-h-[60vh] max-w-[30vw] min-h-[62vh] min-w-[30vw] rounded-3xl pl-[10px] flex flex-col items-center gap-25'
    let ClassDeciderSignup= !Signup? 'hidden' : 'bg-white max-h-[60vh] max-w-[30vw] min-h-[62vh] min-w-[30vw] rounded-3xl pl-[10px] flex flex-col items-center gap-25'
    
    let open_signup=()=>{
        setSignup(true)
        setSignin(false)
    }
    let open_signin=()=>{
        setSignup(false)
        setSignin(true)
    }
  return (


    <div className='bg-sky-900 min-h-screen max-h-screen px-[15vw] py-[25vh] pb-[25vh] flex justify-center gap-1 items-center'>
      <div className={ClassDeciderSignin}>
        <h1 className='text-center text-white font-[400] text-4xl p-[10px]'>Sign In</h1>
        <div className='flex flex-col gap-2 min-w-90/100'>
        <input type="email" name="username" id="username" placeholder='Enter your username' className='border-[2px] border-sky-900 p-2 rounded-3xl min-w-80/100'/>
        <input type="password" name="password" id="password" placeholder='Enter your password'className='border-[2px] border-sky-900 p-2 rounded-3xl min-w-80/100'/>
        <button type="submit" className=' text-center mt-4 bg-sky-800 text-white p-3 rounded-3xl cursor-pointer'>Log In</button>
      </div>
      <p>Don't have an account?<button onClick={open_signup}  className='cursor-pointer text-white'>Signup</button></p>
      </div>
      <div className={ClassDeciderSignup}>
        <h1 className='text-center text-gray-400 font-[400] text-4xl p-[10px]'>Sign Up</h1>
        <div className='flex flex-col gap-2 min-w-90/100'>
        <input type="email" name="username" id="username" placeholder='Enter your username' className='border-[2px] border-sky-900 p-2 rounded-3xl min-w-80/100'/>
        <input type="password" name="password" id="password" placeholder='Enter your password'className='border-[2px] border-sky-900 p-2 rounded-3xl min-w-80/100'/>
        <button type="submit" className='text-center mt-4 bg-sky-800 text-gray-200 p-3 rounded-3xl cursor-pointer'>Create Account</button>
      </div>
      <p>Remembered the details?<button onClick={open_signin}  className='cursor-pointer text-gray-400'>Signin</button></p>
      </div>

    </div>
  )
}

export default Signin
