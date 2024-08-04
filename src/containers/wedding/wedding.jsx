import React from 'react';
import './wedding.css';
import img1 from '../../assets/Wedding/1.jpg';
import img2 from '../../assets/Wedding/2.jpg';
import img3 from '../../assets/Wedding/3.jpg';
import img4 from '../../assets/Wedding/4.jpg';
import img5 from '../../assets/Wedding/5.jpg';
import img6 from '../../assets/Wedding/6.jpg';
import img7 from '../../assets/Wedding/7.jpg';
import { Description } from '../../containers';

const Possibility = () => {

  return (
    <div className="on-boarding">
      <div className="wedding">
        <div className="right-ar"></div>
        <div className="hero1">
          <img src={img1} alt="Gentleman in a wedding" className="wedding-img" />
        </div>
        <div className="hero2">
          <div className="hero2a">
            <img src={img2} alt="Gentleman in a wedding" className="wedding-img" />
          </div>
          <div className="hero2b">
            <img src={img3} alt="Gentleman in a wedding" className="wedding-img" />
          </div>
          </div>
        <div className="hero3">
          <img src={img4} alt="Gentleman in a wedding" className="wedding-img" />
        </div>
        <div className="hero4">
          <div className="hero4a">
            <img src={img5} alt="Gentleman in a wedding" className="wedding-img" />
          </div>
          <div className="hero4b">
            <img src={img6} alt="Gentleman in a wedding" className="wedding-img" />
          </div>
        </div>
        <div className="hero5">
          <img src={img7} alt="Gentleman in a wedding" className="wedding-img" />
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

export default Possibility;