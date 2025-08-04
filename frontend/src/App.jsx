import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import  Home  from "./components/Home";
import  Signin from "./components/Signin";
// import  Signup  from "./components/Signup";
import  Unexistingpage  from "./components/Unexistingpage";
import  Task  from "./components/Task";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="*" element={<Unexistingpage />} />
      </Routes>

      
    </>
  )
}

export default App
