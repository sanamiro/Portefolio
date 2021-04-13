import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    CLIQUE CLIQUO CLIQUE toto tata
                    </p>
                <p className='footer-subscription-text'>
                    toto tata titi
                </p>
                <form>
                    <input
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        className='footer-input'
                    />
                    <Button buttonStyle='btn--outline'> Subscribe </Button>
                </form>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'> Link 1 </Link>
                        <Link to='/'> Link 2 </Link>
                        <Link to='/'> Link 3 </Link>
                        <Link to='/'> Link 4 </Link>
                        <Link to='/'> Link 5 </Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'> Link 1 </Link>
                        <Link to='/'> Link 2 </Link>
                        <Link to='/'> Link 3 </Link>
                        <Link to='/'> Link 4 </Link>
                        <Link to='/'> Link 5 </Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'> Link 1 </Link>
                        <Link to='/'> Link 2 </Link>
                        <Link to='/'> Link 3 </Link>
                        <Link to='/'> Link 4 </Link>
                        <Link to='/'> Link 5 </Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            JULO <i className='fab fa-egg' />
                        </Link>
                    </div>
                    <small className='website-rights'> JULO 2021</small>
                    <div className='social-icons'>
                        <Link to='/' className='social-icon-link facebook'>
                             <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link to='/' className='social-icon-link facebook'>
                             <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link to='/' className='social-icon-link facebook'>
                             <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link to='/' className='social-icon-link facebook'>
                             <i className='fab fa-facebook-f'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer