import React from 'react';

const Cart = (props) => {
    const cartArray = props.carts
    console.log('cart array', cartArray)
    let total = 0;
    for (let i = 0; i < cartArray.length; i++) {
        const element = cartArray[i];
        // console.log('element', element)
        total = total + element.salary;
    }
    
    const generateNumber = (num) =>{
        const number = num.toFixed(2);
       const  newNumber = Number(number)
       return newNumber;
    }
    return (
        <div>
            <h3></h3>
            <h5>Total added person {cartArray.length}</h5>
            {/* <h5>{person.first_name}</h5> */}
            <ul>
                {
                    cartArray.map((x) => (
                        <li>
                            {x.first_name + x.last_name} , <span>Salary: </span> ${x.salary}
                        </li>
                    ))
                }
                {/* {
                    cartArray.map( x => <li>
                        {x.first_name + x.last_name } <span>salary</span> ${ x.salary}
                    
                </li>)
                } */}
            </ul>
                <h5>Total Budget : $ {generateNumber(total)}</h5>
        </div>
    );
};

export default Cart;