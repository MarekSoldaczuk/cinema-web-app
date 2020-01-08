import React from "react";
import {Redirect} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import './Repertoire.css'
// components
import MovieList from './MovieList';
import BookingList from './BookingList';
import LoginRegisterView from './LoginRegisterView';
import About from './About';
import Repertoire from './Repertoire';
import Home from './Home';
// images
import cinemaImg from '../img/logo_burned.png';
import slide1 from '../img/slide1.jpg'
import slide2 from '../img/slide2.jpg';
import slide3 from '../img/slide3.jpg';
import Profile from "./Profile";
import ShowContainer from "./ShowContainer";



class App extends React.Component {
    constructor() {
        super();
        this.state = {slide1: slide1, text1: 'Kraina Lodu 2', slide2: slide2, text2: 'Joker', slide3: slide3, text3: 'Gwiezdne Wojny: Skywalker. Odrodzenie'};
    }
    
    render() {
        return (
            <Router>
                <div className="navbar">
                    <nav className="navbar sticky-top navbar-dark navbar-expand-sm justify-content-center">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link navbar-brand">
                                    <div className="logo">
                                        <img src={cinemaImg} alt=""/>
                                        Kino "Kino"
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/repertoire" className="nav-link">Repertuar</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/movies" className="nav-link">Filmy</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/myaccount" className="nav-link">Moje konto</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">O nas</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark justify-content-center">
                        <p>Autorzy: Kozera Teresa, Matejuk Kamil, Sołdaczuk Marek</p>
                    </nav>
                </div>

                    {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                    <Switch>
                        <Route exact path="/">
                            <Home img1={this.state.slide1} img2={this.state.slide2} 
                                img3={this.state.slide3} txt1={this.state.text1} txt2={this.state.text2}
                                txt3={this.state.text3} />
                        </Route>
                        <Route path="/repertoire">
                            <Repertoire />
                            {/* <BookingList /> */}
                        </Route>
                        <Route path="/movies">
                            <MovieList />
                        </Route>
                        <Route path="/show/:id" component={ShowContainer}>
                            {/* <ShowContainer/> */}
                        </Route>

                        {/* UWAGA! Na chwile obecna nie ma przycisku logout, 
                        zeby zasymulowac te akcje trzeba usunac token z zakladki 
                        'Application' w DevToolsach. W przeciwnym przypadku
                        przy klikaniu na zakladke 'MOJE KONTO' wyswietla sie
                        roboczy PROFil */}
                        <PrivateRoute path="/myaccount" component={Profile}/>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/login">
                            <LoginRegisterView />
                        </Route>
                    </Switch>
            </Router>
        );
    }
}

const isLoggedIn = ()=> {
    return localStorage.getItem('token');
}

const PrivateRoute = ({ component: Component, ...rest}) =>( <Route {...rest} render={(props)=> (
    isLoggedIn() ? <Component {...props}/>: <Redirect to='login'/> )}/>
)

export default App;