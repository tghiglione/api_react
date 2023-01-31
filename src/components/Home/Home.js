import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';


const Home=()=>{
    return(
        <div className='home'>
            <h1 className='title'>
                Bienvenidos a la app de Rick and Morty
            </h1>
            <div className='list-link'>
                <Link to='/list'>
                    <button className='list-btn'>VER PERSONAJES</button>
                </Link>
            </div>
        </div>
       
    )
};

export default Home;
