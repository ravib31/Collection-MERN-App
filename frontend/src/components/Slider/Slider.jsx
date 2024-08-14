import React, { useState } from 'react'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import './Slider.scss';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const data = [
      "https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg?auto=compress&cs=tinysrgb&w=1600",
      "https://cdn.pixabay.com/photo/2023/12/04/15/14/ai-generated-8429710_1280.jpg?auto=compress&cs=tinysrgb&w=1600",
        "https://cdn.pixabay.com/photo/2019/11/26/18/19/skirt-4655129_1280.jpg?auto=compress&cs=tinysrgb&w=1600",
      ];
      
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };
    const nextSlide = () => {
      setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };
  
    return (
      <div className="slider">
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
          <img src={data[0]} alt="" />
          <img src={data[1]} alt="" />
          <img src={data[2]} alt="" />
        </div>
        <div className="icons">
          <div className="icon" onClick={prevSlide}>
            <ArrowCircleLeftOutlinedIcon />
          </div>
          <div className="icon" onClick={nextSlide}>
            <ArrowCircleRightOutlinedIcon />
          </div>
        </div>
      </div>
    );
  };

export default Slider