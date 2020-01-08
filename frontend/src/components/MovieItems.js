import React from 'react';
// import ReactDOM from 'react-dom';
import './../css/components.css';

const MovieItems = (props) => {
    //console.log(props.movies);
    const movies = props.movies.map((movie) => {
        return (
            <div key={movie._id} className="item">
                <h1 className="title"><p>{movie.title}</p></h1>
                <h3 className="director">Reżyseria: {movie.director}</h3>
                <div className="genre">
                {movie.genre}  |  {movie.runningTime} minut 
                </div>
                <p className="movie">
                {movie.description}
                </p>
                {/* <hr /> */}
            </div>
            );
    });
        
    return <div className="xd">{movies}</div>;       
};

 export default MovieItems;
