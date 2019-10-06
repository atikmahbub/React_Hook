import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounter from './HookExample.js';
import HookCounterOne from './HookExampleOne';
import HookObject from './HookExampleTwo.js';
import HookArray from './HookExampleThree.js';
import ConditionEffect from './ConditionalUseEffect.js';
import MouseEffect from './MousePointeEffect.js';
import CleanUp from  './CleanUpEffect.js';
import AutoCount from './InCorrectDependency.js';
import FetchData from './FetchData.js';
import ContextA from './ComponentA.js';

export const UserContext = React.createContext()
export const MailContext = React.createContext()
function App() {
  return (
    <div className="App">
    <HookCounter/>
    <HookCounterOne />
    <HookObject />
    <HookArray/> 
    <ConditionEffect /> 
    <CleanUp/>
    <AutoCount />
    <FetchData/>
    <UserContext.Provider value={'Atik'} >
    <MailContext.Provider value = {'atik@gmail.com'}>
    	<ContextA/>
    </MailContext.Provider>	
    </UserContext.Provider>
    </div>
  );
}

export default App;
