import React from 'react'
import MovieItem from './MovieItem'

function MovieList(props) {
    // console.log(props.movies);
  return (
    <div className='youtube__list'>
        <ul>
          {props.movies.map((movie, index) =>(
            <MovieItem key={index} movie={movie} />
          ))}
          
      </ul>
    </div>
  )
}

export default MovieList