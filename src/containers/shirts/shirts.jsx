import React from 'react';
import './shirts.css';
import img1 from '../../assets/Shirts/1.jpg';
import img2 from '../../assets/Shirts/2.jpg';
import img3 from '../../assets/Shirts/3.jpg';
import img4 from '../../assets/Shirts/4.jpg';
import img5 from '../../assets/Shirts/5.jpg';
import img6 from '../../assets/Shirts/6.jpg';
import img7 from '../../assets/Shirts/7.jpg';
import { useNavigate } from 'react-router-dom';
import { Description } from '../../containers';

const Shirts = () => {
  const navigate = useNavigate();

  return (
    <div className="on-boarding">
      <div className="shirts">
        <div className="right-ar"></div>
        <div className="hero1">
          <img src={img1} alt="Gentleman in a shirt" className="shirt-img" />
        </div>
        <div className="hero2">
          <div className="hero2a">
            <img src={img2} alt="Gentleman in a shirt" className="shirt-img" />
          </div>
          <div className="hero2b">
            <img src={img3} alt="Gentleman in a shirt" className="shirt-img" />
          </div>
          </div>
        <div className="hero3">
          <img src={img4} alt="Gentleman in a shirt" className="shirt-img" />
        </div>
        <div className="hero4">
          <div className="hero4a">
            <img src={img5} alt="Gentleman in a shirt" className="shirt-img" />
          </div>
          <div className="hero4b">
            <img src={img6} alt="Gentleman in a shirt" className="shirt-img" />
          </div>
        </div>
        <div className="hero5">
          <img src={img7} alt="Gentleman in a shirt" className="shirt-img" />
        </div>
            
        <div className="left-ar"></div>
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
  );
};

export default Shirts;