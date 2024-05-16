import React from 'react'
import { GlobleCustomHook } from './context'
import { NavLink } from 'react-router-dom'

function Movie() {
    const { movies, isLoading } = GlobleCustomHook()
    if (isLoading) {
        return (
            <div className='loading'>
                <p>Loading...</p>
            </div>
        )
    }
    return (
        <section className='movie'>

            <div className="container">
                <div className="row">

                    {movies.map((currentElem) => {
                        const { imdbID, Poster, Title } = currentElem;
                        const movieName = Title.slice(0, 17)
                        return (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4 " key={imdbID}>
                                <div className='responsive'>
                                    <NavLink to={`movies/${imdbID}`} className="card-title" >

                                        <div className="movie-info">
                                            <h4>{movieName.length >= 17 ? `${movieName}...` : movieName}</h4>
                                            <img src={Poster} alt={imdbID} />

                                        </div>

                                    </NavLink>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section >
    )
}

export default Movie
