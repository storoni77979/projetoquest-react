import React from 'react';
import './Dashboard.css';
import isLoggedIn from '../../autentica';
import {Redirect} from 'react-router-dom';
import store from 'store';
import Lista from './Lista';


const Dashboard = ({history}) => {
  if(!isLoggedIn()) {
    return <Redirect to="/login"/>
  }
  return (
    <div>
      <div className="container-restrito">
        <Lista/>
        
      </div> 
    </div>
  );
};
    
export default Dashboard;