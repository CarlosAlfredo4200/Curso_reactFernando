import React from 'react';
import  ReactDOM  from 'react-dom';
import CounterApp from './componet/CounterApp';
//import PrimeraApp from './componet/primeraApp';
import './index.css'
 

 


const divRoot = document.querySelector('#root');
 

ReactDOM.render(
 
<CounterApp  value={10}/>
 
, divRoot);