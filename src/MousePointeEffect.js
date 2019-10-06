import React , {useState, useEffect} from 'react';

function MouseEffect() {

	const [x,setX] = useState(0)
	const [y,setY] = useState(0)

	const handleMouse = (e) => {
		setX(e.clientX)
		setY(e.clientY)
	}

	useEffect( () =>{
		console.log("Effect Called")
		window.addEventListener('mousemove' , handleMouse)


		return () => {
			console.log("Effect Removed")
			window.removeEventListener('mousemove' ,handleMouse)
		}

	} , [])


  return (
    <div>
    X :  {x} --- Y : {y}
    </div>
  );
}

export default MouseEffect;
