import React from 'react';
import './Raiting.css';

const Raiting = ({rating}) => {

    const ratingArr = [];

    for (let i = 0; i < Math.floor(rating); i++) {
        ratingArr.push('star')
    }

    return (
        <div>
            {ratingArr.map( (item, index) => {
                return <i key={index} className="material-icons rating-star">star</i>
            })}
        </div>
    );
};

export default Raiting;