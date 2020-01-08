import React from 'react';
// import ReactDOM from 'react-dom';  <--wywala warning
import axios from 'axios';
import MovieItems from './MovieItems';
import './../css/components.css';

class MovieList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
        this.moviesAPI();
      }

    moviesAPI = async () => {
        const response = await axios.get('http://localhost:3020/api/movies/');
        //console.log(response.data);
        this.setState({
            movies: response.data
        });  
    }

    render() {
        return ( 
            <div className = "list" >
            <MovieItems movies = {this.state.movies} />
            </div>
        );
    }
}

 export default MovieList;