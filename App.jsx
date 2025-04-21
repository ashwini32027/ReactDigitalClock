import React, { useState } from 'react'
import './index.css'
function App() {
  const[num,setnum]=useState(0);
  return (
    <div className='container'>
      <div className='card'>
        <div className='display'>
            {num}
        </div>
        <div className='button'>
          <button onClick={()=>
            {
              setnum(num+1);
            }
          }>Increment</button>
          <button onClick={()=>
            {
              num>0 && setnum(num-1);
            }
          }>Decrement</button>
        </div>
      </div>
      
      
    </div>
  )
}

export default App
