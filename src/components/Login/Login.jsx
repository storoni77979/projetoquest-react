import React from 'react';

import './Login.css'

function Login(){
    return(
         <div className="central">
        <div className="login">
            <form name="form" action="">
            <h1>Área Restrita</h1>
            <div>
                <input id="usuario"type="text" name="usuario" placeholder="Usuário" /> 
            </div>
            <div>
                <input id="senha"type="password" name="senha" placeholder="Senha" />
            </div>
            <div>
                <button className="enviar" onClick="event.preventDefault(); return acesso(this)">Entrar</button>
            </div>
            {/* <a href="/">Esqueceu sua senha?</a> */}
            </form>
            </div>
      </div>
    )
}

export default Login;