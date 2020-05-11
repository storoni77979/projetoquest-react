import React from 'react';
import ReactDom from 'react-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

ReactDom.render(
        <div>
           <Header />
           <Footer />     
        </div>,
       
        document.getElementById('root')
)