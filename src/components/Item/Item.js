import { Link } from 'react-router-dom';
import './Item.css';

const Item=({character})=>{
    return(
    <div className='item'>
        <Link to={`/detail/${character.id}`}>
            <button className='name'>{character.name}</button>
        </Link>      
    </div>)
};

export default Item;