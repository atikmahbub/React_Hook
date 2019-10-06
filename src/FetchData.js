import React , {useState, useEffect} from 'react';
import axios from 'axios';

function FetchData() {

	const [post, setPost] = useState({})
	const [id , setId] = useState(1)
	const [getIdFromButton , setIdFromButton] = useState(1)

	const handleClick = () => {
		setIdFromButton(id)
	} 

	useEffect( () =>{
		axios.get(`https://jsonplaceholder.typicode.com/posts/${getIdFromButton}`)
		.then(result => {
			console.log(result.data)
			setPost(result.data)

		})
		.catch(Error => console.log(Error))


	},[getIdFromButton])

  return (
    <div>
    <input type="text" value={id} onChange = {(e) => setId(e.target.value)}/>
    <input type="button" onClick = {handleClick} value="Fecth Data" />
    <p>{post.body}</p>
    </div>
  );
}

export default FetchData;
