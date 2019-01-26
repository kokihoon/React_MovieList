import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate()  == true-> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            // id:1,
            title :"샹크스",
            poster : "https://t1.daumcdn.net/cfile/tistory/214ACE49536F9C1118"
          },
          {
            // id:2,
            title :"루피",
            poster : "https://scontent-lga3-1.cdninstagram.com/vp/84ce4014bc8a43db90738624e61c848c/5CD55733/t51.2885-15/e35/31255802_162447204423964_8785540863087345664_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&ig_cache_key=MTc3Njc2OTA1ODIzNjQ4MzI4Mg%3D%3D.2"
          },
          {
            // id:3,
            title :"검은수염",
            poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GZJqsUGCh1w52A_SPcM0dEQE70wEGmgagNGfyIxlNFTc4jc9oA"
          },
          {
            // id:4,
            title :"카이도우",
            poster : "https://t1.daumcdn.net/cfile/tistory/2678F33E58385A772E"
          },
          {
            title: "벤 베크만",
            poster: "http://static.inven.co.kr/image_2011/site_image/game/minidata/84/character_0817_c1.jpg"
          }
        ]
      })
    }, 1000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map( (movie, index) => {
      return <Movie title={movie.title} poster= {movie.poster} key={index}/>
    })

    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
