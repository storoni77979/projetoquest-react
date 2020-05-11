import React from 'react';

import Header from './components/Header/Header';
//import Sobre from './components/Sobre/Sobre';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';


function App(){
    return(
        <div>
            <Header />
            {/* <Sobre /> */}
            <Login />
            <Footer />
        </div>
    )
}

export default App;