import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='w-25 mx-auto'>
            <h1>Our terms and condition</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus ipsa veritatis reprehenderit fugiat facilis nostrum adipisci natus. Perferendis ut magni possimus veniam at dolorem debitis nesciunt quod! Temporibus libero totam labore esse reiciendis recusandae sit alias maiores quo fuga.</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;