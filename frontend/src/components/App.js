// import React from 'react';
// import MovieList from './MovieList';

// // const App = () => {
// //     return <div>App</div>
// // };

// class App extends React.Component {
//     render() {
//         return <div><MovieList /></div>
//     }
// }

// export default App; 

import React from "react";
import ReactDOM from 'react-dom';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MovieList from './MovieList';
import Register from './Register';
import About from './About';
import Repertoire from './Repertoire';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="ui menu themenu">
                        <ul>
                            <li className="item">
                                <Link to="/repertoire">Repertuar</Link>
                            </li>
                            <li className="item">
                                <Link to="/movies">Filmy</Link>
                            </li>
                            <li className="item">
                                <Link to="/myaccount">Moje konto</Link>
                            </li>
                            <li className="item">
                                <Link to="/about">O nas</Link>
                            </li>
                        </ul>
                    </nav>
            
                    {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                    <Switch>
                        
                        <Route path="/repertoire">
                            <Repertoire />
                        </Route>
                        <Route path="/movies">
                            <MovieList />
                        </Route>
                        <Route path="/myaccount">
                            <Register />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;