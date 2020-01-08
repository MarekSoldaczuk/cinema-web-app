import React from 'react';
import axios from 'axios';
import './ShowContainer.css';


class ShowContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null,
            show: null,
            seatMap: {}
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
        const responseS = await axios.get(`http://localhost:3020/api/shows/${this.props.match.params.id}`)
        const show = responseS.data
        const responseM = await axios.get(`http://localhost:3020/api/movies/${show.movie}`)
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

        console.log(this.state.seatMap)
        const message = `W koszyku masz ${numberOfSeats} biletow. Czy chcesz sfinalizowac transakcje?`;
        if(window.confirm(message))
        {
            const response = await axios.post('http://localhost:3020/api/bookings/',
            {
                // Booking object
                bookedSeats: Object.keys(this.state.seatMap),
                showId: this.state.show._id 
            },
            {
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            });
            console.log(response);
        }
    }

    render() {
        if(!this.state.movie || !this.state.show)
        {
            return <p>Loading</p>
        }

        const seatButtons = [];


    
        const seatMap = [];
        this.state.show.seats.forEach((seat)=> {
            if(!seatMap[seat.row-1]) seatMap[seat.row-1] = [];

            let rowMap = seatMap[seat.row-1];

            if(!rowMap[seat.column-1]) rowMap[seat.column-1] = [];

            rowMap[seat.column-1] = seat;


        
        });

        seatMap.forEach((row)=> {

            const rowSeats = [];


            row.forEach((rowSeat)=> {
                rowSeats.push(
                    <div className="seat">

<button className={`${rowSeat.taken?'disabled':'free'} ${this.state.seatMap[rowSeat._id]?'selected': 'unselected'}`} 
disabled={rowSeat.taken} 
onClick={()=>this.toggleSeat(rowSeat)}>

                            <p>{rowSeat.row-1}{rowSeat.column-1}</p>
                            </button>

                    </div>

                )
            })

            seatButtons.push(
                <div className="seatRow">
                {
                    rowSeats
                }
                </div>

            )



        })

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
                     BUY
                 </button>
            </div>
       );
        
    }
}

export default ShowContainer;