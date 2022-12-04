import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);


    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts.id === tshirt.id);
        if (exists) {
            alert('t shirt already exists');
        } else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }

const handleRemoveItem = id => {

    const remaining = cart.filter(ts => ts.id !== id.id);
    setCart(remaining);
}
    return (
        <div>
            <div className='home-container'>
                <div className='t-shirt-container'>
                    {
                        tshirts.map(tshirt => <Tshirt
                            key={tshirt.id}
                            tshirt={tshirt}
                            handleAddToCart={handleAddToCart}
                        ></Tshirt>)
                    }
                </div>

                <div className='cart-container'>
                    <Cart cart={cart}
                    handleRemoveItem = {handleRemoveItem}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;