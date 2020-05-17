import React from 'react';

import Header from './components/Header/Header';
//import Sobre from './components/Sobre/Sobre';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import Routes from './routes';
import history from './history';
import './App.css';


function App(){
    return(
        <div>
            <Routes history={history}/>
            <Footer />
        </div>
    )
}

export default App;