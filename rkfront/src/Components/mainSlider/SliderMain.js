import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import firstImage from '../../Image/img1.jpg';
import secondImage from '../../Image/img2.png';
import thirdImage from '../../Image/img3.jpg';
import fourthImage from '../../Image/img4.jpg';
import './SliderMain.css';
import React from "react";
import Slider from "react-slick";


const SliderMain = () => {
    const settings = {
      dots: true,
      cssEase: "linear",
      infinite: true,
      autoplay: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      dotsClass : "slick-dots custom-indicator"
    };

    return (
      <div className="sliderContainer">
        <Slider {...settings}>
          <div className="slide1">
            <img src={fourthImage} alt=""/>
          </div>
          <div className="slide1">
            <img src={secondImage} alt=""/>
          </div>
          <div className="slide1">
            <img src={thirdImage} alt=""/>
          </div>
          <div className="slide1">
            <img src={firstImage} alt=""/>
          </div>
        </Slider>
      </div>
    );
  }


export default SliderMain;