import React from 'react';
// import ReactDOM from 'react-dom';  <--wywala warning
import './../components/Repertoire.css';
import './../css/components.css';

const RepertoireOneItem = (props) => {

    const pairs = props.pairs.map((pair) => {
        
        let dateAndTime = `${pair.sh.date.substring(8,10)}.${pair.sh.date.substring(5,7)}.${pair.sh.date.substring(0,4)}r, godz: ${pair.sh.date.substring(11,16)}`
        let duration = parseInt(pair.mv.runningTime/60) + "h " + (pair.mv.runningTime%60) + " min"
        let theatre = `sala ${pair.sh.room}`
        let freeSeats = 0
        pair.sh.seats.forEach(seat => {
            if(!seat.taken){
                freeSeats++
            }
        });

        return (
            <li key={pair.sh._id} className="repertoireItem">
                <p id="movieName">{pair.mv.title}</p>
                <p id="dateAndTime">{dateAndTime}</p>
                <p id="duration">{duration}</p>
                <p id="theatre">{theatre}</p>
                <button id="buyButton">Kup Bilet <br/><span className="freeSeats">({freeSeats} miejsc wolnych)</span></button>
            </li>
            );
    });
        
    return <div>{pairs}</div>;       
};

// class RepertoireOneItem extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             pairs: []
//         };
//     }

//     buy = () => {
//         // const response = await axios.get('http://localhost:3020/api/shows/');
//         console.log('clicked')
//     }

//     render() {
//         const pairs = props.pairs.map((pair) => {
        
//             let dateAndTime = `${pair.sh.date.substring(8,10)}.${pair.sh.date.substring(5,7)}.${pair.sh.date.substring(0,4)}r, godz: ${pair.sh.date.substring(11,16)}`
//             let duration = parseInt(pair.mv.runningTime/60) + "h " + (pair.mv.runningTime%60) + " min"
//             let theatre = `sala ${pair.sh.room}`
//             let freeSeats = 0
//             pair.sh.seats.forEach(seat => {
//                 if(!seat.taken){
//                     freeSeats++
//                 }
//             });
    
//             return (
//                 <li key={pair.sh._id} className="repertoireItem">
//                     <p id="movieName">{pair.mv.title}</p>
//                     <p id="dateAndTime">{dateAndTime}</p>
//                     <p id="duration">{duration}</p>
//                     <p id="theatre">{theatre}</p>
//                     <button id="buyButton" onclick={buy}>Kup Bilet <br/><span className="freeSeats">({freeSeats} miejsc wolnych)</span></button>
//                 </li>
//                 );
//             }
//         return <div>{pairs}</div>;
//     }
// }

export default RepertoireOneItem;