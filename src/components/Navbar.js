import React, { useState, useEffect } from 'react'
import { Link} from 'react-scroll'
import './Navbar.css';



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMenu = () => {
        setClick(false);
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <div className={click ? 'nav-menu active' : 'nav-menu'}>
                        <div className='nav-item'>
                            <Link to="sectionProfil"
                                className='nav-links'
                                activeClass="active"
                                spy={true} smooth={true}
                                offset={-150}
                                duration={500}
                                onClick={closeMenu}
                            >
                                Profil
                            </Link>
                        </div>
                        <div className='nav-item'>
                            <Link to="sectionParcours"
                                className='nav-links'
                                activeClass="active"
                                spy={true} smooth={true}
                                offset={-150}
                                duration={500}
                                onClick={closeMenu}
                            >
                                Parcours
                            </Link>
                        </div>
                        <div className='nav-item'>
                            <Link to="sectionProjets"
                                className='nav-links'
                                activeClass="active"
                                spy={true} smooth={true}
                                offset={-100}
                                duration={500}
                                onClick={closeMenu}
                            >
                                Projets
                            </Link>
                        </div>
                        <div className='nav-item'>
                            <Link to="sectionContact"
                                className='nav-links'
                                activeClass="active"
                                spy={true} smooth={true}
                                offset={-250}
                                duration={500}
                                onClick={closeMenu}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
        )
}

export default Navbar