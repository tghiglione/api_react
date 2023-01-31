import './ItemDetail.css';

const ItemDetail=({character})=>{
    return(
        <div className='item-detail'>
            <h3 className='name-detail'>{character.name}</h3>
            <h4 className='status-detail'>Estado: {character.status}</h4>
            <h5 className='species-detail'>Especie: {character.species}</h5>
            <p className='origin-detail'>Origen: {character.origin}</p>
            <img src={character.image} className='img-detail' alt={character.name} />
        </div>
    )
};

export default ItemDetail;