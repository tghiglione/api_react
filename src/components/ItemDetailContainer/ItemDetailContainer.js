import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import Navegation from '../Navegation/Navegation';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ItemDetailContainer=()=>{
    const {idCharacter}=useParams();
    const [character,setCharacter]=useState([]);
    

    useEffect(()=>{
        const characterList= async()=>{
            try{
                const resp = await fetch('https://api.sampleapis.com/rickandmorty/characters');
                const json = await resp.json();
                const characterFilter= await json.filter(item=>item.id===parseInt(idCharacter));
                setCharacter(characterFilter[0])
            }
            catch(error){
                console.log("hubo un error",error)
            }
        };
        characterList();
    },[idCharacter]);
    return(
        <div className='itemDetailContainer'>
            <Navegation/>
            <div className='detail-character'>
                <ItemDetail character={character}/>
            </div>
            <div className='back-button'>
                <Link to='/list'>
                    <button className='back'> Volver al listado </button>
                </Link>
            </div>
            
        </div>
        
    )
};

export default ItemDetailContainer;