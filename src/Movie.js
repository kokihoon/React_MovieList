import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return (
            <div>
                <MoviePoster/>
                <h1>Hello this is Movie.</h1>
            </div>
        );
    }
}

class MoviePoster extends Component {
    render(){
        return (
            <img src="https://scontent-lga3-1.cdninstagram.com/vp/84ce4014bc8a43db90738624e61c848c/5CD55733/t51.2885-15/e35/31255802_162447204423964_8785540863087345664_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&ig_cache_key=MTc3Njc2OTA1ODIzNjQ4MzI4Mg%3D%3D.2"/>
        )
    }
}

export default Movie