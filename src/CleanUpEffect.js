import React , {useState, useEffect} from 'react';
import MouseEffect from './MousePointeEffect.js'

function CleanUp() {

	const [display , setDisplay] = useState(true)

  return (
    <div>
 	<button onClick= { () => setDisplay(!display)}>Toggle Event</button>
 	{display && <MouseEffect/>}
    </div>
  );
}

export default CleanUp;
