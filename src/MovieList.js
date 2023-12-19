import React from 'react'
import MovieCard from './MovieCard'
const MovieList=({movies}) => {
  return (
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
 {movies.map((movie,x) => <MovieCard movie={movie}/>)}
    </div>
  )
}

export default MovieList;