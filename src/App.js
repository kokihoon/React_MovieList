import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


const movies = [
  {
    title :"샹크스",
    poster : "https://t1.daumcdn.net/cfile/tistory/214ACE49536F9C1118"
  },
  {
    title :"루피",
    poster : "https://scontent-lga3-1.cdninstagram.com/vp/84ce4014bc8a43db90738624e61c848c/5CD55733/t51.2885-15/e35/31255802_162447204423964_8785540863087345664_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&ig_cache_key=MTc3Njc2OTA1ODIzNjQ4MzI4Mg%3D%3D.2"
  },
  {
    title :"검은수염",
    poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GZJqsUGCh1w52A_SPcM0dEQE70wEGmgagNGfyIxlNFTc4jc9oA"
  },
  {
    title :"카이도우",
    poster : "https://t1.daumcdn.net/cfile/tistory/2678F33E58385A772E"
  }


]
class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster} />
        })}

        {/* {[
          <Movie title={movies[0].title} poster={movies[0].poster} />
          <Movie title={movies[1].title} poster={movies[1].poster} />
          <Movie title={movies[2].title} poster={movies[2].poster} />
          <Movie title={movies[3].title} poster={movies[3].poster} />
        ]}  위와 같은 뜻임.*/ }
      </div>
    );
  }
}

export default App;
