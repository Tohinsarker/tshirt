import React from 'react';
import './tshirt.css';
const Tshirt = ({ tshirt, handleAddToCart }) => {
    const { name, price, picture } = tshirt;
    return (
      
            <div className='t-shirt'>
                <img src={picture}></img>
                <h1>{name}</h1>
                <h4>Price: {price}</h4>
                <button onClick={() => handleAddToCart(tshirt)}>Buy This</button>
            </div>
        
    );
};

export default Tshirt;