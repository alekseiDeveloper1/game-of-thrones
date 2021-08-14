import React from 'react';
import img from './error.jpg';

const ErrorMessage = () => {
    return (
        <>
            <img className='error-img' src={img}></img>
            <span>Something goes wrong :(</span>
        </>
    )
    
}
export default ErrorMessage;