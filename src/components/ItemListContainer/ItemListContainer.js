import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState,useEffect } from 'react';
import Navegation from '../Navegation/Navegation';

const ItemListContainer=()=>{
    const [characters,setCharacters]=useState([]);
    const [load,setLoad]=useState(true);
    useEffect(()=>{
        const characterList= async()=>{
            try{
                const resp = await fetch('https://api.sampleapis.com/rickandmorty/characters');
                const json = await resp.json();
                setCharacters(json);
            }
            catch(error){
                console.log ("hubo un error", error)
            }
        };
        setLoad(false);
        characterList();
    }, []);

    return(
        <>
        <Navegation/>
        {
            load ? <h1>cargando personajes...</h1>
            :
            <ItemList characters={characters}/>
        }
        
        </>
    )
};

export default ItemListContainer;