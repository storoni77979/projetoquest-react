import React, { Component } from 'react';
import './home.css';
import Banner from '../Banner';
import Questoes from '../Questoes';
import store   from "store";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
    };
    store.remove('loggedIn');
}  
  render() {
    return(
      <div className="content-principal">
        <Banner />
        <Questoes />
      </div>
    );
  }
}

export default Home;