// Projectitem.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Projectitem({ image, name, id }) {
    const navigate = useNavigate();
    return (
        <div className='projectItem'>
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h1> {name} </h1>
            <button className='button' onClick={() => { navigate('/project/' + id) }}>Click here</button>
        </div>
    );
}

export default Projectitem;
