import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias facilis blanditiis dolore maxime minima natus vitae perspiciatis repellendus itaque, dolor ad. Molestias possimus rem reprehenderit?</p>
            <p>Back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;