import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ItemDetailContainer=()=>{
    const {idCharacter}=useParams();
    const [character,setCharacter]=useState([]);
    

    useEffect(()=>{
        const listaStock= async()=>{
            try{
                const resp = await fetch('https://api.sampleapis.com/rickandmorty/characters');
                const json = await resp.json();
                const filtro= await json.filter(item=>item.id===parseInt(idCharacter));
                setCharacter(filtro[0])
            }
            catch(error){
                console.log("hubo un error",error)
            }
        };
        listaStock();
    },[idCharacter]);
    return(
        <>
            <div className='detail-character'>
                <ItemDetail character={character}/>
            </div>
            <Link to='/list'>
                <button> Volver al listado </button>
            </Link>
        </>
        
    )
};

export default ItemDetailContainer;