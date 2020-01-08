import React from 'react';
import './../css/components.css';
import axios from 'axios';
import MovieItems from './MovieItems'


const getdateToDisplay = (date) => {
    const dateDate = new Date(date);
    const month = dateDate.getUTCMonth() + 1; //months from 1-12
    const day = dateDate.getUTCDate();
    const year = dateDate.getUTCFullYear();

    return year + "/" + month + "/" + day;
};

const allSeats = async (data) => {
    console.log('data');
    console.log(data[0].movie);
    console.log('inside');
    const response = await axios.get(`http://localhost:3020/api/movies/${data[0].movie}`);
    console.log('movies');
    console.log(response.data);
};



const BookingItems = (props) => {
    // console.log(props.bookings);
    console.log('In BookingItems');

    

    const bookings = props.bookings.map((booking) => {
        allSeats(props.bookings);
        return (
            <div key={booking._id} className="item">
                {/* {console.log(booking.bookedSeats.length)}
                {console.log((new Date(booking.date).getUTCMonth() + 1))}
                {console.log((new Date().getUTCMonth()))}
                {console.log(`data" ${getdateToDisplay(booking.date)}`)} */}
                {console.log(booking.movie)}
                {/* {allSeats()} */}
                
                
                {/* valid more for the Repertoire/shows...
                <button>{getdateToDisplay(booking.date)}</button> */}
                {/* <h1 className="title"><p>{booking.show.movie.title}</p></h1>
                <h3 className="director">Reżyseria: {booking.show.movie.director}</h3>
                <div className="genre">
                {booking.show.movie.genre}  |  {booking.show.movie.runningTime} minut 
                </div>
                <p className="movie">
                {booking.show.movie.description}
                </p>
                {/* console.log(booking.bookedSeats); */}
            </div>
            );
    });

    console.log('bookings:"');
    // console.log(props.bookings[0]);
    // {allSeats(bookings[0].movie)}
        
    return(
        <div>
            <div className="xd">{bookings}</div>
        </div>
        
    );        
};



export default BookingItems;