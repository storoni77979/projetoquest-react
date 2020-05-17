import React, { Component } from 'react';
import './banner.css';

class Banner extends Component {
  render(){
    return(
      <section className="banner">
        <div className="container-banner">
            <h2>Nosso site será,</h2>
            <h1>LANÇADO EM BREVE!</h1>
            <p>Mas, antes de ir embora preencha o formulário e nos conte como podemos ajudar.</p>
        </div>
      </section>
    );
  }
}

export default Banner;