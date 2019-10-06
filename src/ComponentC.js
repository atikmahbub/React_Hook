import React , {useContext} from 'react';
import {UserContext,MailContext} from './App.js';

function ContextC(){
	const user = useContext(UserContext);
	const mail = useContext(MailContext);
	return(
			<div>
			
				{user} - {mail}
			</div>	
		) ;
	}
export default ContextC