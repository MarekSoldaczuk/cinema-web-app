import React from 'react';
import ReactDOM from 'react-dom';
import './../css/components.css';

class MovieList extends React.Component {
    
    render() {
        return ( 
        <div className="item">
         
        <h1 className="title">Tytułsa ssdadasf saf f asdas fdsafas fs dfsdfasdf  </h1>
        <h3 className="director">Reżyseria: Imię Nazwisko</h3>
      
        <div className="genre">
        GATUNEK | GATUNEK | 100 minut </div><br /><hr />
        <p className="movie">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, fugit mollitia. Natus maxime quisquam et
        repellat velit debitis sequi hic, omnis voluptatum, dolore vitae corrupti! In id ea sequi eligendi!
        </p>
        </div>
        );
    }
}

//ReactDOM.render(<MovieList />, document.getElementById('movieList'));

 export default MovieList;