import React from 'react';
import './Raiting.css';

const Raiting = ({rating}) => {

    const ratingArr = [];

    for (let i = 0; i < Math.floor(rating); i++) {
        ratingArr.push('star')
    }

    return (
        <div>
            <span>
                { rating >= 1 ? <i className='material-icons rating-star'> star </i> : <i className='material-icons rating-star'> star_border </i> }
            </span>
            <span>
                { rating >= 2 ? <i className='material-icons rating-star'> star </i> : <i className='material-icons rating-star'> star_border </i> }
            </span>
            <span>
                { rating >= 3 ? <i className='material-icons rating-star'> star </i> : <i className='material-icons rating-star'> star_border </i> }
            </span>
            <span>
                { rating >= 4 ? <i className='material-icons rating-star'> star </i> : <i className='material-icons rating-star'> star_border </i> }
            </span>
            <span>
                { rating >= 5 ? <i className='material-icons rating-star'> star </i> : <i className='material-icons rating-star'> star_border </i> }
            </span>
        </div>
    );
};

export default Raiting;