import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState("olive")
  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor:color}}><h1 className='text-green text-3xl text-orange-950 font-bold sticky top-28 justify-center '>Background Changer</h1>
      <div className='fixed flex flex-wrap bottom-16 px-0 inset-x-0 justify-center  rounded-xl'>
        
        <div className='fixed flex flex-wrap bg-white justify-center px-3 py-2 rounded-xl gap-3'>
          <button className='px-4 py-1 rounded-full align-center justify-center text-white'
          style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>
            Red
          </button>
          <button className='px-4 py-1 rounded-full align-center justify-center text-white'
          style={{backgroundColor:"Blue"}} onClick={()=>{setColor("Blue")}}>
            Blue
          </button>
          <button className='px-4 py-1 rounded-full align-center justify-center text-white'
          style={{backgroundColor:"green"}} onClick={()=>{setColor("green")}}>
            Green
          </button>
          <button className='px-4 py-1 rounded-full align-center justify-center text-white'
          style={{backgroundColor:"Orange"}} onClick={()=>{setColor("Orange")}}>
            Orange
          </button>
          <button className='px-4 py-1 rounded-full align-center justify-center text-black'
          style={{backgroundColor:"Yellow"}} onClick={()=>{setColor("Yellow")}}>
            Yellow
          </button>
          <button className='px-4 py-1 rounded-full align-center justify-center text-black'
          style={{backgroundColor:"Pink"}} onClick={()=>{setColor("Pink")}}>
            Pink
          </button>
          <button className='px-4 py-1 rounded-full align-center justify-center text-white'
          style={{backgroundColor:"Purple"}} onClick={()=>{setColor("Purple")}}>
            Purple
          </button>
          <button className='px-4 py-1 rounded-full align-center justify-center text-black'
          style={{backgroundColor:"Lavender"}} onClick={()=>{setColor("Lavender")}}>
            Lavender
          </button>
          <button className='px-4 py-1 rounded-full align-center justify-center text-white'
          style={{backgroundColor:"Brown"}} onClick={()=>{setColor("Brown")}}>
            Brown
          </button>
          <button className='px-4 py-1 rounded-full align-center justify-center text-white'
          style={{backgroundColor:"Black"}} onClick={()=>{setColor("Black")}}>
            Black
          </button>
          <button className='px-4 py-1 rounded-full align-center justify-center text-black'
          style={{backgroundColor:"white"}} onClick={()=>{setColor("white")}}>
            white
          </button>
          <button className='px-4 py-1 rounded-full align-center justify-center text-white'
          style={{backgroundColor:"Gray"}} onClick={()=>{setColor("Gray")}}>
            Gray
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
