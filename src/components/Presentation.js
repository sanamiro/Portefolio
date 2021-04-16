import React from 'react';
import './Presentation.css';

import JulesImg from '../images/JulesPortrait.png';

function Presentation() {
    return (
        <div className='presentation'>
            <div className = 'presentation-txt'>
                <h1 className='presentation-name'> Jules Radisson </h1>
                <h2 className='presentation-desc'> Ing&eacute;nieur en Sciences et Technologies</h2>
                <h2 className='presentation-desc'> des M&eacute;dias Num&eacute;riques</h2>
            </div>
            <div className='presentation-img-wrapper'>
                <img className='presentation-img'
                    src={JulesImg}
                />
            </div>

        </div>
        )
}

export default Presentation