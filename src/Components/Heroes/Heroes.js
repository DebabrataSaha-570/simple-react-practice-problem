import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons'
import './Heroes.css'
const Heroes = (props) => {
    // console.log('heroes', props.persons.email)
    const { id, first_name, last_name, email, gender, image, profession, salary } = props.persons
    return (
        <div>
            
            <div class="card card-div" style={{width: '15rem'}}>
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body  card-div">
                    <h5 class="card-title">{first_name + " " + last_name}</h5>
                    <p class="card-text">{profession} </p>
                    <p class="card-text">Email: {email} </p>
                    <p class="card-text">Salary: $ {salary} </p>
                    
                     <button  onClick={() => props.handleClick(props.persons)} class="btn "> <FontAwesomeIcon icon={faPlus} /> Add Person</button>
                </div>
            </div>
        </div>
    );
};

export default Heroes;