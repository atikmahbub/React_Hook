import React , {useState, useEffect} from 'react';

function AutoCount() {

	const [count,setCount] = useState(0)
	const tick = () =>{
		setCount(prevCount => prevCount + 1)
	}

	useEffect ( () => {
		const interval = setInterval(tick,1000);

		return () =>{
			clearInterval(interval)
		}

	}, [count])
  return (
    <div>
    <h2>
    {count}
    </h2>
    </div>
  );
}

export default AutoCount;
