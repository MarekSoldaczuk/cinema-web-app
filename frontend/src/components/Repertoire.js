import React from 'react';
import './Repertoire.css';

class Repertoire extends React.Component {
    render() {
        return (<div className="listBg col-11 col-sm-9 col-md-8 col-lg-7 col-xl-6">
            <ul className="repertoireList">
                <li className="repertoireItem">
                    <p id="movieName">Nazwa Filmu</p>
                    <p id="dateAndTime">01.01.2020r, godz 18:30</p>
                    <p id="duration">110 min</p>
                    <p id="theatre">sala 7</p>
                    <button id="buyButton">Kup Bilet <br/><span className="freeSeats">(23 miejsca wolne)</span></button>
                </li>
                <li className="repertoireItem">
                    <p id="movieName">Nazwa Filmu</p>
                    <p id="dateAndTime">01.01.2020r, godz 18:30</p>
                    <p id="duration">110 min</p>
                    <p id="theatre">sala 7</p>
                    <button id="buyButton">Kup Bilet <br/><span className="freeSeats">(23 miejsca wolne)</span></button>
                </li>
            </ul>
        </div>);
    }
}

export default Repertoire;