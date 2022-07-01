import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import './ProductSlide.css';
import {ArrowForwardIos , ArrowBackIos} from '@mui/icons-material';
import Slider from "react-slick";
import bulb from "../../Image/bulb.webp";

const NextBtn = (props) =>{
  const { className , onClick } = props;
  return(
    <div className = {className} onClick = {onClick}>
      <ArrowForwardIos style={{color : "black"}}/>
    </div>
  )
}

const PrevBtn = (props) =>{
  const { className , onClick } = props;
  return(
    <div className = {className} onClick = {onClick}>
      <ArrowBackIos style={{color : "black"}}/>
    </div>
  )
}


const ProductSlide = () =>{
    
    let settings = {
      slidesToShow : 4,
      infinite : true,
      slidesToScroll : 1,
      autoplay: true,
      pauseOnHover: true,
      autoplaySpeed: 2000,
      prevArrow : <PrevBtn />,
      nextArrow : <NextBtn />,
      swipeToSlide: true,
      centerMode : true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
      responsive:[
        {
          breakpoint : 600,
          settings : {
            slidesToShow : 1,
            infinite : false,
            centerMode : false,
          }
        },
        {
          breakpoint : 1287,
          settings : {
            slidesToShow : 3,
            infinite : false,
            centerMode : false,
          }
        },
        {
          breakpoint : 900,
          settings : {
            slidesToShow : 3,
            infinite : false,
            centerMode : false,
          }
        }
      ]
      
    }
  return (
      <div style ={{margin : "30px" , position : "relative" , marginTop:"40px"}}>
        <Slider {...settings}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Slider>
      </div>
    
    )
    

}

const Card = () =>{
  return(
    <div className = "card">
      <img src={bulb} alt="" className ="cardImage" />
        <div className="cardDescription">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit pariatur praesentium nulla?</p>
          <span>$12</span>
        </div>
    </div>
  )
}

export default ProductSlide;
