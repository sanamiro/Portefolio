import React from 'react';
import './Contact.css';

import LinkedinLogo from '../images/linkedin.svg';
import CVLogo from '../images/CVLogo.svg';
import GithubLogo from '../images/github.svg';

function Contact() {
    return (
        <div id="sectionContact" className='contact'>
            <h1 className='contact-title'>Contact</h1>
            <div className='contact-items-wrapper'>
                <h2 className='contact-txt'>
                    Mail : jules.radisson@free.fr
                </h2>
                <h2 className='contact-txt'>
                    T&eacute;l&eacute;phone : 06 77 74 19 99
                </h2>
                <div className='contact-logo-wrapper'>
                    <a href="https://drive.google.com/file/d/17sd-i9PUhcnzmveYP-9F6BYk6f68yMlV/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={CVLogo}
                            className='contact-logo'
                        />
                    </a>
                    <a  className='contact-logo'
                        href=" https://www.linkedin.com/in/jules-radisson"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={LinkedinLogo}
                            className='contact-logo'
                        />
                    </a>
                    <a  className='contact-logo'
                        href="https://github.com/sanamiro"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={GithubLogo}
                            className='contact-logo'
                        />
                    </a>
                </div>
            </div>
        </div>
        )
}

export default Contact