import React from 'react';
import './Preloader.css'

const Preloader = () => {
    return (
        <div className="progress">
            <div className="indeterminate"></div>
        </div>
    );
};

export default Preloader;