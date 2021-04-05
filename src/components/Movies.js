import React from 'react';
import PropTypes from 'prop-types';

function Movie({title, year, rating, des }){
    return (
        <div>
            <h1>{title}</h1>
            <h3>{year} / {rating}</h3>
            <p>{des}</p>

        </div>
    )
}

Movie.propType = {
    title:PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    rating:PropTypes.number.isRequired,
    des:PropTypes.string.isRequired,

}


export default Movie;