import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            opened:false
        }
    }

    toggle(){
        let state=this.state;
        state.opened=!state.opened;
        this.setState(state);
        console.log(this.state.opened)
    }
    render(){    
        return ( 
            <header className="header">
                <div className="container">
                    <div className="logo">
                        <Link to="/">
                            <img src="https://via.placeholder.com/150x60.png?text=Logo" alt="" />
                        </Link>
                    </div>
                    <ul className={this.state.opened?'menu responsivo':'menu'} id="menuPrincipal">
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/sobre">SOBRE</Link>
                        </li> 
                        <li>
                            <Link to="/login">LOGIN</Link>
                        </li>
                        <li>
                            <Link to="#" className="icon" onClick={()=>this.toggle()}></Link>
                        </li>
                    </ul>
                </div>    
            </header>
        )
    } 
}
    
export default Header;
    