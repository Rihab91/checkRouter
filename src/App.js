import Filter from './Filter';
import AddMovie from './AddMovie';
import './App.css';
import { Routes , Route ,Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import MovieList from './MovieList';

function App() {
  const [movies,setMovies]=useState([
    {id:uuidv4(),
     title: 'Scream 3', 
    description: 'While Sidney and her friends visit the Hollywood set of Stab 3, the third film based on the Woodsboro murders', 
    posterURL: 'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png',
   rating: '9.5' },
   {id:uuidv4(),
    title: 'The boy', 
    description: 'A young boy tries to get by between a complicated private life, family and social difficulties.', 
    posterURL: 'https://content.wepik.com/statics/28430531/preview-page0.jpg',
   rating: '8.5' },
   {id:uuidv4(),
    title: 'Star Wars EP7', 
   description: 'Star Wars, or Star Wars (former French name), is a series of science fiction films, space opera style', 
   posterURL: 'https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/v/d/vd-046-star-wars-official-poster-ep7.jpg',
  rating: '8' },
]);
const [rate,setRate]=useState(0);
const [title,setTitle]=useState("");


  return (
    <div className="App">
     <h1 style={{color: "red", margin: "10px", textAlign: "center" }}  > The 3 best movies of all time </h1>
    <div style={{display:'flex',flexDirection:'row'}}></div>
    <Routes>
    <Route path="/" element={ <div>
      <AddMovie setMovies={setMovies} movies={movies} />
      <Filter rate={rate} setRate={setRate} setTitle={setTitle} />
      <MovieList  movies={movies.filter((movie)=>movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())&& movie.rating>=rate)}/> 
      </div>}/>
    </Routes>
 
    </div>
  );
}

export default App;
