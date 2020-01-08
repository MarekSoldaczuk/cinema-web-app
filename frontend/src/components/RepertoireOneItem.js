import React from 'react';
import {Redirect} from 'react-router-dom';
import './../components/Repertoire.css';
import './../css/components.css';

class RepertoireOneItem extends React.Component {
        constructor(props) {
            super(props);
            this.state = {show: undefined};
        }
    
        getdateToDisplay = (date) => {
            const dateDate = new Date(date);
            const month = dateDate.getUTCMonth() + 1; //months from 1-12
            const day = dateDate.getUTCDate();
            const year = dateDate.getUTCFullYear();
    
            return year + "/" + month + "/" + day;
        };

        getDuration = (pair)=> {
            return parseInt(pair.mv.runningTime/60) + "h " + (pair.mv.runningTime%60) + " min";
        }

        onClickButton = (show)=>{
            this.setState({
                selectedShow: show
            })
        }

        getFreeSeats = (show)=> {
            let freeSeats = 0;
            show.seats.forEach(seat => {
                if(!seat.taken){
                    freeSeats++;
                }
            });
            return freeSeats;
        }
    
        
        render() {
            if(this.state.selectedShow !== undefined)
            {
                return <Redirect to={'/show/'+this.state.selectedShow._id}/>
            }

        return (
            <li key={this.props.pair.sh._id} className="repertoireItem">
                <p id="movieName">{this.props.pair.mv.title}</p>
                <p id="dateAndTime">{this.getdateToDisplay(this.props.pair.sh.date)}</p>
                <p id="duration">{this.getDuration(this.props.pair)}</p>
                <p id="theatre">{this.props.pair.sh.room}</p>
                <button id="buyButton" onClick={()=>this.onClickButton(this.props.pair.sh)}>Kup Bilet 
                        <br/><span className="freeSeats">({this.getFreeSeats(this.props.pair.sh)} miejsc wolnych)</span>
                </button>
            </li>
        )}
};

export default RepertoireOneItem;