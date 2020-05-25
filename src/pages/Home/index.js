import React, {useState} from 'react';
import './App.css';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';





function App(props) {
  const historiador = useHistory();
  const [usuario, setUsuario] = useState("")

  
  function vamospesquisar(){
    Axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(resposta => {
    const depositado = resposta.data;
    const depositadoNome = [];
    depositado.map((repository)=>{
      depositadoNome.push(repository.name);
    });
    localStorage.setItem('depositadoNome', JSON.stringify(depositadoNome));
    historiador.push('./repositorios');
  });
}

  return (
    <>  
  <h1>{props.title} {props.user}</h1>
  <p>{usuario}</p>
 
  
  <input className="usuarioInput" 
  placeholder="Usuário" 
  value={usuario} 
  onChange={evento => setUsuario(evento.target.value)}/>
  
  <button type="button" onClick={vamospesquisar}>Buscar</button>
  
  </>
  
  );
}

export default App;
