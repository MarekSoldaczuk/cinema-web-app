import React from 'react';
// import ReactDOM from 'react-dom';  <--wywala warning
import './../components/Repertoire.css';
import './../css/components.css';

const RepertoireOneItem = (props) => {
    //console.log(props.movies);
    const movies = props.movies.map((movie) => {
        return (
            <li key={movie.id} className="repertoireItem">
                <p id="movieName">{movie.title}</p>
                <p id="dateAndTime">01.01.2020r, godz 18:30</p>
                <p id="duration">110 min</p>
                <p id="theatre">sala 7</p>
                <button id="buyButton">Kup Bilet <br/><span className="freeSeats">(23 miejsca wolne)</span></button>
            </li>
            );
    });
        
    return <div>{movies}</div>;       
};

 export default RepertoireOneItem;