import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { Button } from './Button';
import './Navbar.css'



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState (true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu=()=>setClick(false);

    const showButton=()=>{
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);
    
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo">
                        PetFinder <FontAwesomeIcon className='fa-paw' icon={faPaw}></FontAwesomeIcon>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FontAwesomeIcon className='fa-times' icon={faTimes} /> : <FontAwesomeIcon className='fa-bars' icon={faBars} />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/animals' className='nav-links' onClick={closeMobileMenu}>
                                Animals
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/organization' className='nav-links' onClick={closeMobileMenu}>
                                Organization
                            </Link>
                        </li>
                    </ul>
                    {/* if button is true then return the button component */}
                    {button && <Button buttonStyle="btn--outline">LOG IN</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar