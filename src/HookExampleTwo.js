import React , {useState} from 'react';

function HookObject() {

	const initialCount = 0
	const [name , setName] = useState({ "firstName" : '' , "lastName" : ''})
  return (
    <div>
     <input type="text" value = {name.firstName} onChange = 
     { e => setName( 
       { 
        ...name , 
        firstName : e.target.value 
       }
      )
   }
     />
      <input type="text" value = {name.lastName} onChange =
       { e => setName(
        {
         ...name,
          lastName : e.target.value 
        }
        )
     }
       />
      <h2>First Name :  {name.firstName}</h2>
      <h2>Last Name :  {name.lastName}</h2>
    </div>
  );
}

export default HookObject;
