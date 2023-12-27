import {useState} from 'react'
import './';
function Counter() {
    const [count, setCount]=useState(0); 
    const increment = () => {
        setCount(count+1);
    }
    const decrement = () => {
        setCount(count-1);
    }
  return (
    <div className="container">
      <h1 className="number" >{count}</h1>
      <section className='btns-container'>
        <button onClick={increment} className='increment'>+</button>
        <button onClick={decrement} className='decrement'>-</button>
      </section>
    </div>
  )
}

export default Counter



