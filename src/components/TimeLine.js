import React from 'react';
import TimeLineItem from './TimeLineItem';
import './TimeLine.css';

import TimeLineImg from "../images/TimeLineImg.png";

function TimeLine() {
    return (
        <div className = 'timeline'>
            <h1> Mon Parcours </h1>

            <div className='timeline-container'>
                <div className='timeline-image-container'>
                    <img className='timeline-image'
                        src={TimeLineImg}
                        alt = "TimeLineIMG"
                    />
                </div>
                <div className='timeline-items-container'>
                    <TimeLineItem
                        titre="Musee Departement D'Arles Antique"
                        date="Sept. 2020 / Avril 2021"
                        txt="J'ai effectue un service civique au musee d'Arles Antique. C'etait vraiment super j'ai bien kiffe"
                    />
                    <TimeLineItem
                        titre="Musee Departement D'Arles Antique"
                        date="Sept. 2020 / Avril 2021"
                        txt="J'ai effectue un service civique au musee d'Arles Antique. C'etait vraiment super j'ai bien kiffe"
                    />
                    <TimeLineItem
                        titre="Musee Departement D'Arles Antique"
                        date="Sept. 2020 / Avril 2021"
                        txt="J'ai effectue un service civique au musee d'Arles Antique. C'etait vraiment super j'ai bien kiffe"
                    />
                </div>
            </div>
        </div>
        )
}


export default TimeLine