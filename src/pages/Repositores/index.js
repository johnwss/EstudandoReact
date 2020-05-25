import React,{useEffect,useState} from 'react';
import * as estilo from './styled';



function Repositorios(){ 
    const[Repositorios,setarRepositorio] = useState([]);
    useEffect(()=>{
        let depositadoNome = localStorage.getItem('depositadoNome');
         depositadoNome = JSON.parse(depositadoNome);
        setarRepositorio(depositadoNome);

    },[]);

    return(
        <>
        <estilo.Container>
        <estilo.Titulo>Repositorios</estilo.Titulo>
        <estilo.Lista>
            {Repositorios.map(depositefuncao => {
                return(
                <estilo.ListaItem>{depositefuncao}</estilo.ListaItem>
                )
            })}
        

        </estilo.Lista>
        </estilo.Container>
        

        </>
    )
}

export default Repositorios;