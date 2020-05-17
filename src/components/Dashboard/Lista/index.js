import React, { Component } from 'react';
import './lista.css'

class Lista extends Component{
  constructor(props){
    super(props);
    this.state={
      lista:[]
    }
  }

  componentDidMount(){
      fetch('https://api.airtable.com/v0/appNMqfxsnLCxxRdr/Question%C3%A1rio',
      {
        headers: {
          'Authorization': 'Bearer keyN3jqJEZr0P7Rgc',
          'Content-Type': 'application/json'
          },
          method: "GET"
      })

     .then((response)=>response.json())
     .then((json)=>{
      var list=[];
        for(let item in json.records){
          list.push(json.records[item]);
          let state = this.state;
          state.lista=list;
          this.setState(state);
       
        } 
      }) 
  }  
  render() {
    return(
      <div>
        <div className="gerenciamento">
          <table className="tabela-gerenciamento">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Forma de contato</th>
                <th>Disponibilidade para contato</th>
                <th>Assunto</th>
                <th>Conteudo</th>
              </tr>
            </thead> 
            <tbody>
              {this.state.lista.map((item)=>{
                if(item.fields["Nome"]==null & item.fields["Email"]==null 
                &item.fields["Telefone"]==null & item.fields["Forma de contato"]==null 
                & item.fields["Diponibilidade para contato"]==null
                &item.fields["Assunto"]==null & item.fields["Conteúdo"]==null){
                  return;
                } else {
                  return(   
                      
                    <tr key={item.id}>
                      <td style={{}}>{item.fields["Nome"]}</td>
                      <td style={{}}>{item.fields["Email"]}</td>
                      <td style={{}}>{item.fields["Telefone"]}</td>
                      <td style={{}}>{item.fields["Forma de contato"]}</td>
                      <td style={{}}>{item.fields["Disponibilidade para contato"]}</td>
                      <td style={{}}>{item.fields["Assunto"]}</td>
                      <td style={{}}>{item.fields["Conteúdo"]}</td>
                    </tr>
                  );
                }
               
              })}
            </tbody>
        </table> 
      </div>   
      </div>
    );  
  }


}



export default Lista;