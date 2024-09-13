import React from 'react'
import './whatGPT3.css'
import pinkImg from '../../assets/yh.png'
import wineImg from '../../assets/wine.png'
import dots from '../../assets/dots.png'
import img1 from '../../assets/Jackets/2.jpg';
import img2 from '../../assets/Jackets/3.jpg';
import img3 from '../../assets/Jackets/6.jpg';
import img4 from '../../assets/Wedding/4.jpg';
import img5 from '../../assets/Wedding/6.jpg';
import img9 from '../../assets/Wedding/2.jpg';
import img6 from '../../assets/Sale/6.jpg';
import img7 from '../../assets/Sale/7.jpg';
import img8 from '../../assets/Sale/8.jpg';
 





const WhatGPT3 = () => {


  return (
    <div className = "on-boarding">
      <div className="hero">
        <div className="left-hero">     
           <div className="left-text">
            <p className='hero-text'>
              Elevate Your Shopping<br/>
              Experience Today<br/>
              </p>
              <p className='hero-sub-text'>
              Welcome to the Home for all your Suit Needs<br/>
              Where fashion meets beauty in unending trends<br/>
              </p>
           </div>
        </div>
        <div className="right-hero">
          <div className="pink-bg"></div>
          <img src={pinkImg} alt="Boys in suit" className="hero-img"/> 
        </div>
      </div> 
      <div className="banner">
        <div className="ban-text">
          <h2>MADE FOR MEN</h2>
        </div>
      </div>
      <div className="section2 section2a">
        <div className="part">
          <div className="parta">
          <img src={img1} alt="Boy in casual wear" className="casual-img" />
          </div>
          <div className="partb">
            <h2 className="descr">
              Official Men’s Suit (Brown)<br/>
            with Light Brown Trousers</h2>
            <h3 className="price">GHc 200</h3>
          </div>
        </div>
        <div className="part">
        <div className="parta">
        <img src={img2} alt="Boy in casual wear" className="casual-img" />
        </div>
        <div className="partb">
            <h2 className="descr">
              Official Men’s Suit (Brown)<br/>
            with Light Brown Trousers</h2>
            <h3 className="price">GHc 200</h3>
          </div>
        </div>
        <div className="part">
        <div className="parta">
        <img src={img3} alt="Boy in casual wear" className="casual-img" />
        </div>
        <div className="partb">
            <h2 className="descr">
              Official Men’s Suit (Brown)<br/>
            with Light Brown Trousers</h2>
            <h3 className="price">GHc 200</h3>
          </div>
        </div>
      </div>  
      <div className="section2">
        <div className="part">
          <div className="parta">
          <img src={img6} alt="Boy in casual wear" className="casual-img" />
          </div>
          <div className="partb">
            <h2 className="descr">
              Official Men’s Suit (Brown)<br/>
            with Light Brown Trousers</h2>
            <h3 className="price">GHc 200</h3>
          </div>
        </div>
        <div className="part">
        <div className="parta">
        <img src={img7} alt="Boy in casual wear" className="casual-img" />
        </div>
        <div className="partb">
            <h2 className="descr">
              Official Men’s Suit (Brown)<br/>
            with Light Brown Trousers</h2>
            <h3 className="price">GHc 200</h3>
          </div>
        </div>
        <div className="part">
        <div className="parta">
        <img src={img8} alt="Boy in casual wear" className="casual-img" />
        </div>
        <div className="partb">
            <h2 className="descr">
              Official Men’s Suit (Brown)<br/>
            with Light Brown Trousers</h2>
            <h3 className="price">GHc 200</h3>
          </div>
        </div> 
      </div>   
      <div className="ad">
         <div className="sub-ad">
          <div className="left-ad">
            <div className="sec-pink"></div> 
            <img src={wineImg} alt="Boy in casual wear" className="wine-img" /> 
          </div>  
        <div className="right-ad">
          <div className="eclipse"></div>
          <img src={dots} alt="dots design" className="dots"/>
        </div>
        </div> 
        <div className="bottom-banner">        
          <h2 className='wed-text'>Wedding Collection</h2>
        </div>
      </div>
      <div className="wed-section">
        <div className="section2">
          <div className="part">
            <div className="parta">
            <img src={img4} alt="Boy in casual wear" className="casual-img" />
            </div>
            <div className="partb">
            <h2 className="descr">
              Official Men’s Suit (Brown)<br/>
            with Light Brown Trousers</h2>
            <h3 className="price">GHc 200</h3>
          </div>
          </div>
          <div className="part">
          <div className="parta">
          <img src={img5} alt="Boy in casual wear" className="casual-img" />
          </div>
          <div className="partb">
            <h2 className="descr">
              Official Men’s Suit (Brown)<br/>
            with Light Brown Trousers</h2>
            <h3 className="price">GHc 200</h3>
          </div>
          </div>
          <div className="part">
          <div className="parta">
          <img src={img9} alt="Boy in casual wear" className="casual-img" />
          </div>
          <div className="partb">
            <h2 className="descr">
              Official Men’s Suit (Brown)<br/>
            with Light Brown Trousers</h2>
            <h3 className="price">GHc 200</h3>
          </div>
          </div>
        </div> 
      </div>

    </div>
  )
}

export default WhatGPT3

