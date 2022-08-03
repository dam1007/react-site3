import React, { useEffect, useState } from 'react'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Contents from '../layout/Contents';
import MovieCont from '../includes/MovieCont';
import Title from '../layout/Title';
import Contact from '../layout/Contact';
import MovieList from '../includes/MovieList';
import MovieSearch from '../includes/MovieSearch';

function Movie() {
  //데이터 가져오기
  const [movies, setMovies] = useState([]);

  //2. 써치이번에는 useEFfect 필요없음.
  const search = (query) => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=45e9fa99afdcadc228de0c92d3ee1c9c&query=${query}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
         setMovies(result.results);
      })
      .catch((error) => console.log('error', error));
  };
  
  useEffect(() => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://api.themoviedb.org/3/search/movie?api_key=45e9fa99afdcadc228de0c92d3ee1c9c&query=marvel", requestOptions)
      .then(response => response.json())
      .then(result => {
        setMovies(result.results)
        console.log(result)
      })
      .catch(error => console.log('error', error));
    
  }, []);
  

  return (
    <>
      <Header />
        <Contents>
          <Title title={["movie", "reference"]} />
            <section className="youtube__cont">
              <div className="container">
                <div className="youtube__inner">
                  <MovieSearch onSearch={search} />
                  <MovieList movies={movies}/>
                </div>
              </div>
            </section>
            <Contact />
          <MovieCont />
        </Contents>
      <Footer />
    </>
  )
}

export default Movie