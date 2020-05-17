import React, { Component } from 'react';
import store from 'store';

import './Login.css'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            usuario:'',
            senha:'',
            logado: false
        };
        store.remove('loggedIn');
    }  
    
   
    
    logar(event) {
        event.preventDefault();
        const { history } = this.props;
        const {usuario,senha} = this.state;
        if(usuario===""&senha==="") {
            alert("Por favor digite um usuario e senha")
        }else{
            fetch('https://api.airtable.com/v0/appNMqfxsnLCxxRdr/tblalxZw8lAvxtzCI?api_key=keyN3jqJEZr0P7Rgc&filterByFormula=(AND({Email}=%22'+this.state.usuario+'%22,{Senha}=%22'+this.state.senha+'%22))')
            .then((response)=>response.json()).then(data=>{this.data=data;
                if((JSON.stringify(this.data))==='{"records":[]}'){
                   alert("Usuário ou senha inválidos")
                } else {
                    store.set('loggedIn', true);
                    history.push('/dashboard'); 
                }
            })
            .catch((err)=>console.error(err))
    
        }
       
    }
    render(){
        return(
            <div className="central">
            <div className="login">
                <form name="form" onSubmit={(e)=>this.logar(e)}>
                <h1>Área Restrita</h1>
                <div>
                    <input id="usuario"type="text" name="usuario" placeholder="Usuário" value={this.state.usuario}
                    onChange={(e) => this.setState({usuario: e.target.value})}/> 
                </div>
                <div>
                    <input id="senha"type="password" name="senha" placeholder="Senha" value={this.state.senha}
                    onChange={(e) => this.setState({senha: e.target.value})}/>
                </div>
                <div>
                    <button className="enviar">Entrar</button>
                </div>
                {/* <a href="/">Esqueceu sua senha?</a> */}
                </form>
                </div>
        </div>
        )
    } 
}



export default Login;