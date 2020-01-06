import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SimpleSlider extends React.Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        className: 'cinema-slider'
      };
      return (
        <div className="container">
                <Slider {...settings}>
            <div>
                <img src={this.props.img1} alt="Kraina Lodu 2" />
                <p style={{textAlign: 'center'}}>{this.props.txt1}</p>
            </div>
            <div>
                <img src={this.props.img2} alt="Joker" />
                <p style={{textAlign: 'center'}}>{this.props.txt2}</p>
            </div>
            <div>
                <img src={this.props.img3} alt="Gwiezdne Wojny" />
                <p style={{textAlign: 'center'}}>{this.props.txt3}</p>
            </div>
            </Slider>
        </div>
      );
    }
  }

export default SimpleSlider;