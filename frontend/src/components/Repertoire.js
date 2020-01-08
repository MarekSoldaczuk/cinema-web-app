import React from 'react';
import axios from 'axios';
import RepertoireOneItem from './RepertoireOneItem';
import './Repertoire.css';
let mvs = [];
let shs = [];
let movies = [];

class Repertoire extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pairs: [],
            isFinished: false
        };
      }
      componentDidMount()
      {
          this.moviesAPI();
      }

    moviesAPI = async () => {
        const responseM = await axios.get('http://localhost:3020/api/movies/')
        mvs = responseM.data
        const responseS = await axios.get('http://localhost:3020/api/shows/');
        shs = responseS.data
        shs.forEach(sh => {
            mvs.forEach(mv => {
                if(sh.movie === mv._id){
                    movies.push({sh, mv})
                    console.log(movies)
                }
            })
        });

  
        this.setState({
            pairs: movies,
            isFinished: true
        } );  

    }


    render() {
        const items = [];
        for (const value of this.state.pairs) {
            items.push(<RepertoireOneItem pair={value} key={value.sh._id} />)
          }
        return (<div className="listBg col-11 col-sm-9 col-md-8 col-lg-7 col-xl-6">
            <ul className="repertoireList">
                {items}
            </ul>
        </div>);
        
    }
}

export default Repertoire;