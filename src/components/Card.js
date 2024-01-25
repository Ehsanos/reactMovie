import React, {useState} from 'react'
import image from '../img/img.png'

export const Card = ({movie}) => {
  const imgMovie = 'https://image.tmdb.org/t/p/w1280';
  return (
    <div className="movie">
<img src={imgMovie+movie.poster_path} alt=""/>
<div className="movie-info">

            <h3>{movie.title}</h3>

        </div>
        <div className="overview">
            <h3>overView</h3>
        {movie.overview}
        </div>
    </div>
  )
}
