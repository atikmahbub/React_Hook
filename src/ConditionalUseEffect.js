import React , {useState, useEffect} from 'react';

function ConditionEffect() {

	const [count , incrementCount] = useState(0)
	const [name , setName] = useState('')
	useEffect (() =>{
		console.log("Updating");
		document.title = `You Clicked ${count} times` ; 
	}, [count]); //secifying for which varibale dom will render useEffect


  return (
    <div>
    <input type="text" value = {name} onChange = { (e) => setName(e.target.value)  } />
    <button onClick = { () =>{incrementCount(count + 1) } }>Count {count} </button>
    </div>
  );
}

export default ConditionEffect;
