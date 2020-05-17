import React from "react";
import {Redirect} from 'react-router-dom';
import history from './history';
export const autenticado = () => {

  let user=localStorage.getItem('app-token');
  console.log(user);
  if(user === '{"records":[]}') {
    return false;
  }
  else {
   
    return true;
   
    
    
  }
 
}