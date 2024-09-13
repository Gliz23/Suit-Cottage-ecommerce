import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';
import ghFlag from '../../assets/Component 8.png';
import locationImg from '../../assets/Component 9.png';
import searchIcon from '../../assets/Component 7.png';
import cartIcon from '../../assets/Component 10.png';

const Header = () => {
  const [activeTab, setActiveTab] = useState('sale');
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/${tab}`);
  };

  return (
    <div className="header">
      <div className="logo-section">
        <div className="part1">
          <div className="part1a">
            <img src={ghFlag} alt="Ghana Flag" className="icon" />
            <img src={locationImg} alt="Location Icon" className="icon" />
          </div>
          <p className="brand">SUIT COTTAGE</p>
        </div>
      
        <div className="navbar">
          <p
            className={activeTab === 'sale' ? 'on' : 'off'}
            onClick={() => handleTabClick('sale')}
          >
            SALE
          </p>
          <p
            className={activeTab === 'casual' ? 'on' : 'off'}
            onClick={() => handleTabClick('casual')}
          >
            CASUAL
          </p>
          <p
            className={activeTab === 'suit' ? 'on' : 'off'}
            onClick={() => handleTabClick('suit')}
          >
            SUITS
          </p>
          <p
            className={activeTab === 'jacket' ? 'on' : 'off'}
            onClick={() => handleTabClick('jacket')}
          >
            JACKETS
          </p>
          <p
            className={activeTab === 'wedding' ? 'on' : 'off'}
            onClick={() => handleTabClick('wedding')}
          >
            WEDDING
          </p>
          <p
            className={activeTab === 'shirts' ? 'on' : 'off'}
            onClick={() => handleTabClick('shirts')}
          >
            SHIRTS
          </p>
          <p
            className={activeTab === 'trousers' ? 'on' : 'off'}
            onClick={() => handleTabClick('trousers')}
          >
            TROUSERS
          </p>
        </div>
        <div className="part3">
          <img src={searchIcon} alt="Search Icon" className="icon" />
          <img 
          src={cartIcon} 
          alt="Cart Icon" 
          className="cart-icon icon"
          onClick={() => handleTabClick('cart')}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;