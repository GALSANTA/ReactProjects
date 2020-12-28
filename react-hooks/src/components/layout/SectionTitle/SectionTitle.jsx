import React from 'react';
import './SectionTitle.css';

function SectionTitle(props) {
    return (
        <div className="sectionTitle">
            <h1>{props.title}</h1>
            <hr/>
        </div>
    );
}

export default SectionTitle;