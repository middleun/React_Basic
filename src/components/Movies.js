import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'; 

// movies.map=>다음에 {} 사용하면 return 필요/ ()사용하면 return안써도 됨
function Movie({title, year, genres, poster, detail }){
    return (
        <Link to={{pathname:"/movie_detail", state:{title,year,genres, poster,detail}}}>
            <div className="movie">
                    <img src={poster} alt={title} onError={(e)=>{e.target.onerror = null; e.target.src="https://cdn4.iconfinder.com/data/icons/ui-beast-3/32/ui-49-512.png"}}></img>           
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
        </Link>

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