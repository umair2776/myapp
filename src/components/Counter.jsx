import React,{useState} from 'react'
import { toast } from 'react-toastify'
import {useNavigate} from "react-router-dom"



const Counter = () => {

    const navigate=useNavigate();
  
const [counter,setCounter]=useState(0)

const add=()=>{
   
    if(counter<=3){
        setCounter(counter+1)
    }
    else {
        navigate("/")
    
        toast.warning("bas kray")
    }
}
const minus=()=>{
   
    if(counter>=1){
        setCounter(counter-1)
    }
    else{
        toast.warning("bas b kr da")
    }
}
  return (
    <>
    <div className='d-flex justify-content-center my-2 mx-5'>
        {/* {counter === 4 ? <h1>The Limit is Full</h1>:null} */}
        <button className='minu btn btn-primary' onClick={minus} style={{padding:"15px"}}>-</button>
      {counter}
      <button className='plus btn btn-primary' onClick={add}>+</button>
    </div>
   

    </>
  )
}

export default Counter
