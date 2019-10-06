import React , {useState} from 'react';

function HookCounterOne() {

	const initialCount = 0
	const [count , setCount] = useState(initialCount)
  return (
    <div>
    <h1>{count}</h1>
    <button onClick = { () =>  setCount(count + 1) } > Increment Count </button>
    <button onClick = { () => { if (count > 0) setCount(count - 1) }} > Decrement Count </button>
    <button onClick = { () => setCount(initialCount) } > Reset Count  </button>
    </div>
  );
}

export default HookCounterOne;
