import React from 'react';
import './TimeLine.css';

function TimeLineItem(props) {
    return (
        <div className = 'timeline-item'>
            <h2 className = 'timeline-item-titre'> {props.titre} </h2>
            <h3 className='timeline-item-date'> {props.date} </h3>
            <p className='timeline-item-txt'> {props.txt} </p>
        </div>
        )
}

export default TimeLineItem