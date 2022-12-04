import React from 'react';

const Cart = ({ cart, handleRemoveItem }) => {

    let msg;
    if(cart.length === 0){
        msg = <p>Please Product</p>
    }
    return (
        <div>
            <p>order summary</p>
            {
                cart.map(tshirt => <p
                    key={tshirt.id}
                >
                {tshirt.name} <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                cart.length === 0 ? <p>Please buy product</p> : <p>Thanks</p>
            }
        </div>
    );
};

export default Cart;