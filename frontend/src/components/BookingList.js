import React from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';
import BookingItems from './BookingItems';
import './../css/components.css';

class BookingList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            bookings: []
        };
        this.bookingsAPI();
      }

    bookingsAPI = async () => {
        const response = await axios.get('http://localhost:3020/api/bookings/');
        //console.log(response.data);
        this.setState({
            bookings: response.data
        });  
    }

    render() {
        return ( 
            <div className = "list" >
            <BookingItems bookings = {this.state.bookings} />
            </div>
        );
    }
}

 export default BookingList;