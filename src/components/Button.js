import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    //if componet has the button style then you jsut want it to be whatever button style
    // we created for if it's not true then it will be the first style it was there
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize: SIZES[0]

    return (
        <Link to='/login-in' className='btn-mobile'>
            <button className={`btn ${checkButtonSize} ${checkButtonStyle}`}
            onClick={onClick}
            type={type}
            >
            {children}
            </button>
            
        </Link>
    )
};