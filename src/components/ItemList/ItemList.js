import './ItemList.css';
import Item from '../Item/Item';


const ItemList=({characters})=>{
    return(
        <div className='characters'>
            {
                characters.map(chr=>{
                    return(
                        <Item character={chr}/>
                    )
                })
            }
        </div>
        
    )
};

export default ItemList;