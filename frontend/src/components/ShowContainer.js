import React from 'react';
import axios from 'axios';
import './ShowContainer.css';


class ShowContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null,
            show: null,
            seatMap: {},
            isSuccessfulBooking: false,
            successfulBooking: null
        };
    }

    componentDidMount()
    {
        this.getResource();
    }

    getdateToDisplay = () => {
        const dateDate = new Date(this.state.show.date);
        const month = dateDate.getUTCMonth() + 1; //months from 1-12
        const day = dateDate.getUTCDate();
        const year = dateDate.getUTCFullYear();

        return year + "/" + month + "/" + day;
    };

    getDuration = (pair)=> {
        return parseInt(pair.mv.runningTime/60) + "h " + (pair.mv.runningTime%60) + " min"
    }

    getResource = async () => {
        const responseS = await axios.get(`https://obscure-sierra-52013.herokuapp.com/api/shows/${this.props.match.params.id}`)
        const show = responseS.data
        const responseM = await axios.get(`https://obscure-sierra-52013.herokuapp.com/api/movies/${show.movie}`)
        const movie = responseM.data

        this.setState({
            movie,
            show
        } );  
    }
    toggleSeat = (seat) => {

        const seatMap = {...this.state.seatMap};

        if(seatMap[seat._id])
        {
            delete seatMap[seat._id];
        } else {
            seatMap[seat._id] = true;
        }

        this.setState(
            {
                seatMap
            }
        )
    }

    onClickBuy = async ()=> {

        
        const numberOfSeats = Object.keys(this.state.seatMap).map((seat)=> {
            return this.state.seatMap[seat]
        }).length;

        const message = `W koszyku masz ${numberOfSeats} biletow. Czy chcesz sfinalizowac transakcje?`;
        if(window.confirm(message))
        {
            const response = await axios.post('https://obscure-sierra-52013.herokuapp.com/api/bookings/',
            {
                // Booking object
                bookedSeats: Object.keys(this.state.seatMap),
                showId: this.state.show._id 
            },
            {
                headers: {
                    'x-auth-token': localStorage.getItem('token') !== null ? localStorage.getItem('token') : undefined
                }
            });

            this.setState(
                {
                    isSuccessfulBooking: response.status === 200,
                    successfulBooking: response.data.booking
                }
            )
        
        }
    }

    render() {
        if(!this.state.movie || !this.state.show)
        {
            return <p>Loading</p>
        }

        const seatButtons = [];

        const seats = [...this.state.show.seats]; 
        const rows = [...new Set(seats.map((seat)=>seat.row))]
        const columns = [...new Set(seats.map((seat)=>seat.column))]
        const rowCount = {}
    
        const seatMap = [];

        this.state.show.seats.forEach((seat)=> {

            if(!seatMap[seat.row-1]) seatMap[seat.row-1] = []

            if(!rowCount[seat.row-1]) rowCount[seat.row-1] = 0

            rowCount[seat.row-1] ++;

            let rowMap = seatMap[seat.row-1];

            if(!rowMap[seat.column-1]) rowMap[seat.column-1] =  []

            rowMap[seat.column-1] = seat;
        
        });

        seatMap.forEach((row, index)=> {

            const rowSeats = [];


            row.forEach((rowSeat)=> {
                rowSeats.push(
                <div className="seat" key={`seat_${rowSeat._id}`}>

                    <button className={`${rowSeat.taken?'disabled':'free'} ${this.state.seatMap[rowSeat._id]?'selected': 'unselected'}`} 
                    disabled={rowSeat.taken} key={`button_${rowSeat._id}`}
                    onClick={()=>this.toggleSeat(rowSeat)}>
                        <p>{rowSeat.row-1}{rowSeat.column-1}</p>
                    </button>

                </div>
                )
            })

            seatButtons.push(
                <div className="seatRow" key={`seatRow_${index}`}>
                {
                    rowSeats
                }
                </div>
            )
        })

        if(this.state.isSuccessfulBooking)
        {
            let seats = this.state.successfulBooking.bookedSeats.map((seat)=> 
            {
                return <p key={`result_${seat._id}`}>{seat.row} - {seat.column}</p>
            })
            return (
                <div className="showContainer">
                    <p>Dziekujemy za zakup biletow</p>
                    <p>{this.state.movie.title}</p>
                    <h3> {this.state.movie.title}</h3>
                    <h4> {this.getdateToDisplay()}</h4>
                    <p> Sala: {this.state.show.room}</p>
                    <h6>Miejsca: </h6>
                    {seats}
                </div>
            )
        }
        return (
             <div className="showContainer">
                <h3> {this.state.movie.title}</h3>
                <h4> {this.getdateToDisplay()}</h4>
                <p> Sala: {this.state.show.room}</p>
                <hr />
                <div className="screenContainer">

                <h1>EKRAN</h1>

                </div>

                 {seatButtons}
                 <button onClick={this.onClickBuy}>
                     KUP
                 </button>
            </div>
       );        
    }
}

export default ShowContainer;