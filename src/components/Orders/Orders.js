import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
// import Cart from '../Cart/Cart';

const Orders = () => {
    // Loader function parameters
    // { products: products, initialCart: initialCart }
    const { initialCart } = useLoaderData(); 

    // useState use to perform product delete task and show in UI.
    const [cart, setCart] = useState(initialCart);

    //perform specific id delete from local storage and UI.
    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        // array without specific id
        setCart(remaining);
        // specific id information delete from local storage
        // utilities manual function use
        removeFromDb(id);
    }

    //clear UI and Local storage all data
    const clearCart = () =>{
        // UI product information empty
        setCart([]);
        // all information delete from local storage
        // utilities manual function use
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    // information && task => if information true task will be perform
                    cart.length === 0 && <h2>No Items for Review. Please <Link to="/">Shop more</Link></h2>
                }
            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;