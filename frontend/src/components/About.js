import React from 'react';
import cinemaImg from '../img/about.JPG';
import './About.css';

const About = () => {
    return (
        <div>
            <img className="desc" src={cinemaImg} alt="" />
            <p className="about">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, deleniti veniam nostrum qui et exercitationem
            officiis odio commodi fuga, facere, ex at. Sunt voluptatem, commodi quia odit excepturi assumenda
            consequatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla numquam magnam impedit dolor a cum
            molestias. <br />
            Error nam officiis dolores ipsam aliquam placeat temporibus voluptas quidem, recusandae asperiores ipsa.
            Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nisi ducimus magni impedit, veniam facere repellendus
            aspernatur deserunt.
            </p>
        </div>
    );
};

export default About;