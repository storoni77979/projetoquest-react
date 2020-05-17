import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './questoes.css';

class Questoes extends Component {
   
  constructor(props) {
    super(props);
    this.state={
      boxe:[
        {id:1, name:`Sites Responsivos`, img:'responsivo.svg', tick:false},
        {id:2, name:`Landing Pages`, img:'landing-page.svg', tick:false},
        {id:3, name:`Aplicativos Móveis`, img:'aplicativos.svg', tick:false},
        {id:4, name:`Sistema Web`, img:'sistemas.svg', tick:false}
      ],
      boxe2:[
        {id:1, name:`E-mail`, img:'email.svg', tick:false},
        {id:2, name:`Telefone`, img:'telefone.svg', tick:false},
        {id:3, name:`WhatsApp`, img:'whatsapp.svg', tick:false},
      ],
      boxe3:[
        {id:1, name:`Manhã`, img:'manha.svg', tick:false},
        {id:2, name:`Tarde`, img:'tarde.svg', tick:false},
        {id:3, name:`Noite`, img:'noite.svg', tick:false},
      ],
      respostas:{ 
        nome:'',
        email:'',
        telefone:'',
        msg:'',   
        resposta01:'',
        resposta02:'',
        resposta03:'',
       
      },
      open1:true,
      open2:false,
      open3:false,
      open4:false,
      opne5:false
    };

   
    this.cadastrar = this.cadastrar.bind(this);
    this.dadosForm = this.dadosForm.bind(this);
    this.enviar = this.enviar.bind(this);
    this.recarrega=this.recarrega.bind(this);
    this.cont=0;
    this.clicado1=false;
    this.clicado2=false;
    this.clicado3=false;
    this.clicado4=false;
    
   
  }
  
  cadastrar() {
    let state = this.state;
    this.cont=this.cont + 1;
    if(this.cont === 1 & this.clicado1===true) {
        state.open1=false;
        state.open2=true;
        this.setState(state);
        this.clicado1=false;  
    } else if(this.cont === 2 & this.clicado2===true) {
      state.open2=false;
      state.open3=true;
      this.setState(state);
      this.clicado2=false; 
    } else if(this.cont === 3 & this.clicado3===true) {
      state.open3=false;
      state.open4=true;
      this.setState(state);
      this.clicado3=false;   
  } else {
    alert("Escolha uma opção");
    this.cont--;
  }  
  
   
  }

  dadosForm(e) {
    let form= this.state.respostas;
    form[e.target.name]=e.target.value;
    this.setState({respostas: form});
  }

  enviar(event) {
     
    const {nome, email, telefone, msg} =this.state.respostas;

    if(nome!=='' && email !=='' && telefone !=='' && msg !=='') {
    
      this.setState({error:''});
    

      this.respostas={
        "records": [
          {
            "fields":{
              "Nome":this.state.respostas.nome,
              "Email":this.state.respostas.email,
              "Telefone": this.state.respostas.telefone,
              "Forma de contato":this.state.respostas.resposta02,
              "Disponibilidade para contato":this.state.respostas.resposta03,
              "Assunto":this.state.respostas.resposta01,
              "Conteúdo":this.state.respostas.msg
            }
          }
        ]
      }

      
     

      fetch("https://api.airtable.com/v0/appNMqfxsnLCxxRdr/Question%C3%A1rio?key=keyN3jqJEZr0P7Rgc",
    {
        headers: {
        'Authorization': 'Bearer keyN3jqJEZr0P7Rgc',
        'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(this.respostas)
    })
    .then(()=>alert("Dados salvo com sucesso"))
    .catch(function(res){ console.log(res) })
    this.state.respostas.nome='';
    this.state.respostas.email='';
    this.state.respostas.telefone='';
    this.state.respostas.msg='';
    let state = this.state;
    state.open4=false;
    state.open5=true;
    this.clicado4=true;
    this.setState(state);



    }else {
      this.setState({error: 'Ops! Parece que esta faltando algo!'});
    }
  
    event.preventDefault()
  }
  
  

  dados(i) {
    let state = this.state; 
    this.clicado1=true; 
    if(state.boxe[i].tick==true) {
        return;
    } else {
        state.boxe[i].tick=!this.state.boxe[i].tick;
        this.setState(state)
        for(let key in state.boxe) {
        let check = state.boxe[key];
        if(state.boxe[i] != check){
            check.tick=false;  
         }
       }
    }
    state.respostas.resposta01=state.boxe[i].name;
    this.setState(state);
  }

  dados2(i) {
    let state = this.state;
    this.clicado2=true;  
    if(state.boxe2[i].tick==true) {
        return;
    } else {
        state.boxe2[i].tick=!this.state.boxe2[i].tick;
        this.setState(state)
       
       
       for(let key in state.boxe2) {
        let check = state.boxe2[key];
        if(state.boxe2[i] != check){
            check.tick=false;  
         }
       }
    }
    state.respostas.resposta02=state.boxe2[i].name;
    this.setState(state);
  
  }

  dados3(i) {
    let state = this.state;
    this.clicado3=true;  
    if(state.boxe3[i].tick==true) {
        return;
    } else {
        state.boxe3[i].tick=!this.state.boxe3[i].tick;
        this.setState(state)
       
       
       for(let key in state.boxe3) {
        let check = state.boxe3[key];
        if(state.boxe3[i] != check){
            check.tick=false;  
         }
       }
    }
    state.respostas.resposta03=state.boxe3[i].name;
    this.setState(state);
   
  }

  recarrega(){
    window.location.reload();
    
  }

  

  render() {
    const {open1}=this.state; 
    const {open2}=this.state; 
    const {open3}=this.state;
    const{open4}=this.state;
    const{open5}=this.state;
    return(
      <section className="questoes" >
            <div className="quest-1" style={{display: open1 ? 'block' : 'none'}}>           
            <h2>Qual desafio digital você tem?</h2>
              <ul className="opcoes-resp">
                {this.state.boxe.map((item,index)=>{
                 return(
                <li key={item.id}>
                    <label htmlFor={`resp${item.id}`}>
                        <div className="box">
                            <img height="50px" src={require(`../../assets/images/${item.img}`)}/>
                            <div className={item.tick?'tick':''}>
                            <img className="checado" src={require('../../assets/images/tick.png')} alt="" style={{display:item.tick?'block':'none'}}/>
                            </div>
                        </div>
                        <input id={`resp${item.id}`} className="resp" type="checkbox" name="quest1" value="Sites-Reponsivos" onChange={()=>this.dados(index)}/>
                    </label>
                    <h3>{item.name.split(' ').map((valor,index)=>{
                            return(
                                <p className="titulo-box" key={index}>{valor}</p>
                            )
                    })}</h3>    
                  
                  </li>
                 );
                
                })}
                 
                </ul>
                <div className="espaco-botao">
                    <button onClick={this.cadastrar}>PRÓXIMO</button>
                </div>
                <div className="barra-progresso">
                    <progress value="25" max="100"></progress>
                </div>
             </div>
             <div className="quest-2" style={{display: open2 ? 'block' : 'none'}}>
                <h2>Qual a melhor forma de contato?</h2>
                <ul className="opcoes-resp">
                    {this.state.boxe2.map((item,index)=>{
                        return(
                            <li key={item.id}>
                            <label htmlFor={`resp2${item.id}`}>    
                                <div className="box">
                                    <img height="50px" src={require(`../../assets/images/${item.img}`)}/>
                                    <div className={item.tick?'tick':''}>
                                        <img className="checado" src={require('../../assets/images/tick.png')} alt="" style={{display:item.tick?'block':'none'}}/>
                                    </div>
                                </div>
                                <input id={`resp2${item.id}`} className="resp" type="checkbox" name="quest1" value="Email" onChange={()=>this.dados2(index)}/>
                            </label>    
                            <h3>{item.name}</h3>    
                        
                   
                   
                    </li>
                        );
                    })}
                       
                   
                  </ul>
                <div className="espaco-botao">
                    <button onClick={this.cadastrar}>PRÓXIMO</button>
                </div>  
                <div className="barra-progresso">
                        <progress value="50" max="100"></progress>
                </div>    
              </div>
               <div className="quest-3" style={{display: open3 ? 'block' : 'none'}}>
                  <h2>Qual melhor período para contato</h2>
                  <ul className="opcoes-resp">
                    {this.state.boxe3.map((item,index)=>{
                      return(  
                        <li key={item.id}>
                            <label htmlFor={`resp3${item.id}`}>
                                <div className="box">
                                    <img height="50px" src={require(`../../assets/images/${item.img}`)}/>
                                    <div className={item.tick?'tick':''}>
                                        <img className="checado" src={require('../../assets/images/tick.png')} alt="" style={{display:item.tick?'block':'none'}}/>
                                    </div>
                                </div>
                                <input id={`resp3${item.id}`} className="resp" type="checkbox" name="quest1" onChange={()=>this.dados3(index)}/>
                            </label>    
                            <h3>{item.name}</h3>
                        </li>
                          );
                        })}
                    </ul>
                  <div className="espaco-botao">
                      <button onClick={this.cadastrar}>PRÓXIMO</button>
                  </div>
                  <div className="barra-progresso">      
                      <progress value="75" max="100"></progress>
                  </div>    
                </div> 
                 <div className="formulario-final quest-4" style={{display: open4 ? 'block' : 'none'}}>
                 {this.state.error && <p>{this.state.error}</p>}
                    <form name="form_usuario" onSubmit={this.enviar}>
                        <div className="form-item">
                            <label htmlFor="nome">Nome</label>
                            <input id="nome" name="nome" type="text" value={this.state.respostas.nome} onChange={this.dadosForm} placeholder=""/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="email">E-mail</label>
                            <input id="email" name="email"  type="email" value={this.state.respostas.email} onChange={this.dadosForm} placeholder="" /> 
                        </div>

                        <div className="form-item">
                            <label htmlFor="tel">Telefone (WhatsApp)r</label>
                            <input id="tel" name="telefone" type="tel" value={this.state.respostas.telefone} onChange={this.dadosForm}/>  
                        </div>
                        <div className="form-item">
                            <label htmlFor="msg">Mensagem</label><br/>
                            <textarea name="msg" cols="30" rows="10" id="msg" value={this.state.respostas.msg} onChange={this.dadosForm}></textarea>
                        </div>
                        <div className="espaco-botao">
                            <button type="submit">Enviar</button>
                        </div>
                        <div className="barra-progresso">
                            <progress value="100" max="100"></progress>
                        </div>    
                    </form>
                </div> 
                 <div className="agradecimento quest-5" style={{display: open5 ? 'block' : 'none'}}>
                    <div className="content-textual">
                        <h1>Obrigado(a)!</h1>
                       
                        <h2>Recebemos seu formulário e entraremos em contato em breve.</h2>
                        {
                          this.clicado4
                          ?setInterval(this.recarrega,3000)
                          :""
                        }  
                    </div> 
                </div>        
        </section>
    )
  }
}

export default Questoes;


                  
                