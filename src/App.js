import React from 'react'
import {useState} from 'react'
import './index.css'

function App() {

    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const [total, setTotal] = useState(""); 

    function calculator() {

     
      setTotal(number1 + number2);
      console.log(total)

     
    


    }
        return (
            <div className='app'>
              <h2>Adding Two Numbers</h2>

             
              <label>Enter First Number : </label>
              <input type='number'
              value={number1}
              onChange={(e)=> setNumber1(+e.target.value)}/>
              <br></br>

              <label>Enter second Number : </label>
              <input type='number'
              value={number2}
              onChange={(e)=> setNumber2(+e.target.value)}/>
              <br></br>

              <label>Results : {total || ""}</label>
              
              <br></br>


              <button onClick={calculator}>Display Results</button>

            </div>


        )
    
}

export default App

