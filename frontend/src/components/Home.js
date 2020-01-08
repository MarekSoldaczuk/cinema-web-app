import React from 'react';
import SimpleSlider from './SimpleSlider';

const Home = (props) => {
    return (
        <div className="page-container"> 
        
            <SimpleSlider img1={props.img1} img2={props.img2} img3={props.img3} txt1={props.txt1} txt2={props.txt2} txt3={props.txt3}/>
            <p className="description text-center">
                Witaj na stronie kina "Kino", najlepszego kina w tej części Europy. <br />
                Zachęcamy do zapoznania się z naszą ofertą, w której z pewnością znajdziesz coś dla siebie!
                <br />
                Wszystkie użyteczne informacje znajdują się na stronie, którą przeglądać możesz przy pomocy górnego paska
                nawigacji.<br />
                Do zobaczenia w Kinie!
            </p>
        </div>
        
    );
};

export default Home;