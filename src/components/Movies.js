import React from 'react';
import PropTypes from 'prop-types';

// movies.map=>다음에 {} 사용하면 return 필요/ ()사용하면 return안써도 됨
function Movie({title, year, genres, poster, detail }){
    return (
        <div className="movie">
            <img src={poster} alt={title} onError={(e)=>{e.target.onerror = null; e.target.src="https://www.flaticon.com/svg/vstatic/svg/1773/1773692.svg?token=exp=1617691270~hmac=c59780b3463a77467e599c525c6a5e4f";}}></img>           
            <div className="movie-data">
                <h1 className="movie-title">{title}</h1>
                <h3 className="movie-year">{year}</h3>
                <ul>
                    {genres.map((genre, idx)=>{
                        return(
                            <li key={idx}>{genre}</li>
                        )
                    })}
                </ul>
                <p className="movie-detail">{detail}</p>

            </div>
        </div>
    )
}

Movie.propType = {
    title:PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
    poster:PropTypes.string.isRequired,
    detail:PropTypes.string.isRequired,

}


export default Movie;