import React , {useState, useEffect} from 'react';

function HookCounter() {

	const [count , incrementCount] = useState(0)

	useEffect (() =>{
		document.title = `You Clicked ${count} times` ; 
	});
  return (
    <div>
    <button onClick = { () =>{incrementCount(count + 1) } }>Count {count} </button>
    </div>
  );
}

export default HookCounter;
