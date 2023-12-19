import {  useState } from 'react';
import MovieList from './MovieList';
import { v4 as uuidv4 } from 'uuid';
import Filter from './Filter';
import './App.css';
import {Routes, Route, Link, useNavigate } from "react-router-dom";
import MovieDes from './MovieDes';
import { Card } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
const MovieCard  = ({movie}) => {

  return (
    <div >
    <Link to={`/Movies/${movie.title}`}>
    <Card style={{width: '18rem', margin:'10px'}}>
    <Card.Img style={{ height: '420px', objectFit: 'cover' }} src={movie.posterURL}  />
    <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
          description: {movie.description} <br />
          rating: {movie.rating} <br />
        
    </Card.Text>
    <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rating}
        />
    </Card.Body>
    </Card>
    </Link>

    </div>
  )
}

export default MovieCard