import React, { useState } from 'react';
import './Search.css'

const Search = () => {

    const [value, setValue] = useState('');

    return (
        <div className='input-field'>
            <i className="large material-icons input-field__icon">search</i>
            <input className='input-field__input' type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
    );
};

export default Search;