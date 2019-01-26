import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


const movies = [
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
  }


]
class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate()  == true-> componentWillUpdate() -> render() -> componentDidUpdate()

  // componentWillMount() {
  //   console.log("will mount")
  // }

  // componentDidMount() {
  //   console.log("did mount")
  // }

  state = {
    greeting: 'Hello!'
  }
  componentDidMount() {
    setTimeout(() => {
      // this.state.greeting = 'something' // 이렇게 업데이트 하면 안됨.
      this.setState({
        greeting: 'Hello again!'
      })
    }, 5000)
  }
  render() {
    // console.log("did render")
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map( (movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
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
