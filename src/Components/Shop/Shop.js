import React, { useState } from 'react';
import './Shop.css';
import data from '../fakeData/Data';
import Heroes from '../Heroes/Heroes';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [person, setPerson] = useState(data)
    console.log(person)
    const [cart, setCart] = useState([])
    const handleClick = (abc) => {
        // console.log('clicked',abc)
        const array = [...cart, abc]
        setCart(array)
    }
    return (
        <div className="shopContainer">
            <div className="heroContainer">
                
                {
                    person.map( x => <Heroes handleClick={handleClick} persons={x}></Heroes>)
                }
            </div>
            <div className="cartContainer">
                <Cart carts={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;