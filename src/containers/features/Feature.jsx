import React from 'react'
// import Lottie from 'lottie-react';
// import animationData from '../../assets/Animation 1.json';
import './feature.css'
import img1 from '../../assets/Casual/1.png';
import img2 from '../../assets/Casual/2.png';
import img3 from '../../assets/Casual/3.png';
import img4 from '../../assets/Casual/4.png';
import img5 from '../../assets/Casual/5.png';
import img6 from '../../assets/Casual/6.png';
import img7 from '../../assets/Casual/7.png';
import { useNavigate } from 'react-router-dom'
import { Description } from '../../containers';



const Feature = () => {
  const navigate = useNavigate()
  
  return (
    <div className = "on-boarding">
      <div className="casual">
        <div className="right-ar">

        </div>
        <div className="hero1">     
          <img src={img1} alt="Boy in casual wear" className="casual-img" />
        </div>
        <div className="hero2">
          <div className="hero2a">
            <img src={img2} alt="Boy in casual wear" className="casual-img" />
          </div>
          <div className="hero2b">
            <img src={img3} alt="Boy in casual wear" className="casual-img" />
          </div>
        </div>
        <div className="hero3">
          <img src={img4} alt="Boy in casual wear" className="casual-img" />
        </div>
        <div className="hero4">
          <div className="hero4a">
            <img src={img5} alt="Boy in casual wear" className="casual-img" />
          </div>
          <div className="hero4b">
            <img src={img6} alt="Boy in casual wear" className="casual-img" />
          </div>
        </div>
        <div className="hero5">
          <img src={img7} alt="Boy in casual wear" className="casual-img" />  
        </div>
        <div className="left-ar">
          
        </div>
      </div>
      <Description
        img={img1}
      />
      <Description
        img={img2}
      />
      <Description
        img={img3}
      />
      <Description
        img={img4}
      />
      <Description
        img={img5}
      />
      <Description
        num={6}
        img={img6}
      />
      <Description
        num={7}
        img={img7}
      />
    </div>
    
  )
}
export default Feature
  