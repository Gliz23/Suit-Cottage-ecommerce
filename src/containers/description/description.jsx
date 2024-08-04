import React, { useState, useRef, useEffect, useMemo } from 'react';
import './description.css';
import { setCartItems } from '../../product.jsx';

const Description = (props) => {
  
  const [activeBtn, setActiveBtn] = useState('regular');
  const sizeInputs = useRef([]);
  const dropdownContents = useRef([]);
  const [cartItems] = [];
  const trouserSizes = useMemo(() => ['S', 'M', 'L', 'XL'], []);
  const [product, setProduct] = useState({
    img: props.img,
  });

  const handleSizeBtnClick = (btn) => {
    setActiveBtn(btn);
  };

  

  const handleAddToCart = () => {
    addToCart(product);
  };
  const addToCart = () => {
    setCartItems([...cartItems, product]);
  };

  useEffect(() => {
    sizeInputs.current.forEach((input, index) => {
      const dropdownContent = dropdownContents.current[index];
      trouserSizes.forEach((size) => {
        const option = document.createElement('div');
        option.textContent = size;
        option.addEventListener('click', () => {
          input.value = size;
          dropdownContent.style.display = 'none';
        });
        dropdownContent.appendChild(option);
      });

      input.addEventListener('click', () => {
        dropdownContent.style.display = 'block';
      });
    });
  }, [trouserSizes, sizeInputs, dropdownContents]);

  return (
    <div className="description">
      <div className="heroa">
        <img
          src={props.img}
          alt="Gentleman in a shirt"
          className="description-img"
        />
      </div>
      <div className="herob">
        <div className="desc">
          <h2 className="heading">Description</h2>
          <p className="desc-text">
            This classic men's black suit is the perfect choice for any formal
            occasion, especially weddings. Crafted from high-quality wool
            blended fabric, it offers a sleek, sophisticated look that will have
            you feeling confident and stylish. The modern, slim-fit design the
            body, while the notched lapel flatters and two-button closure
            provide a timeless aesthetic. Pair this versatile suit with a crisp
            white shirt and polished dress shoes for a polished, elegant
            ensemble that will have you looking your best on the big day.
            Whether you're the groom, suit is a timeless investment piece that
            will serve you well.
          </p>
        </div>
      </div>
      <div className="heroc">
        <div className="size-box">
          <div className="size-title">
            <p> Choose the perfect size here </p>
          </div>
          <div className="size-btns">
            <button
              className={activeBtn === 'small' ? 'yes' : 'no'}
              onClick={() => handleSizeBtnClick('small')}
            >
              Slim
            </button>

            <button
              className={activeBtn === 'regular' ? 'yes' : 'no'}
              onClick={() => handleSizeBtnClick('regular')}
            >
              Regular
            </button>

            <button
              className={activeBtn === 'large' ? 'yes' : 'no'}
              onClick={() => handleSizeBtnClick('large')}
            >
              Large
            </button>

            <button
              className={activeBtn === 'xtr-large' ? 'yes' : 'no'}
              onClick={() => handleSizeBtnClick('xtr-large')}
            >
              Extra Large
            </button>
          </div>
          <div className="sizes">
            <div className="Jacket">
              <div className="size">
                <h3 className="top">Jacket</h3>
                <div className="dropdown">
                  <input
                    type="text"
                    id="trouserSize"
                    ref={(input) => {
                      sizeInputs.current[0] = input;
                      dropdownContents.current[0] = input?.nextSibling;
                    }}
                    readOnly
                  />
                  <div className="dropdown-content"></div>
                </div>
              </div>
              <div className="length">
                <h3 className="top">Jacket</h3>
                <div className="dropdown">
                  <input
                    type="text"
                    id="trouserSize"
                    ref={(input) => {
                      sizeInputs.current[1] = input;
                      dropdownContents.current[1] = input?.nextSibling;
                    }}
                    readOnly
                  />
                  <div className="dropdown-content"></div>
                </div>
              </div>
            </div>
            <div className="Trouser">
              <div className="size">
                <h3 className="top">Jacket</h3>
                <div className="dropdown">
                  <input
                    type="text"
                    id="trouserSize"
                    ref={(input) => {
                      sizeInputs.current[2] = input;
                      dropdownContents.current[2] = input?.nextSibling;
                    }}
                    readOnly
                  />
                  <div className="dropdown-content"></div>
                </div>
              </div>
              <div className="length">
                <h3 className="top">Jacket</h3>
                <div className="dropdown">
                  <input
                    type="text"
                    id="trouserSize"
                    ref={(input) => {
                      sizeInputs.current[3] = input;
                      dropdownContents.current[3] = input?.nextSibling;
                    }}
                    readOnly
                  />
                  <div className="dropdown-content"></div>
                </div>
              </div>
            </div>
            <div className="Waist-Coat">
              <div className="length">
                <h3 className="top">Jacket</h3>
                <div className="dropdown">
                  <input
                    type="text"
                    id="trouserSize"
                    ref={(input) => {
                      sizeInputs.current[4] = input;
                      dropdownContents.current[4] = input?.nextSibling;
                    }}
                    readOnly
                  />
                  <div className="dropdown-content"></div>
                </div>
              </div>
              <div className="length">
                <h3 className="top">Jacket</h3>
                <div className="dropdown">
                  <input
                    type="text"
                    id="trouserSize"
                    ref={(input) => {
                      sizeInputs.current[5] = input;
                      dropdownContents.current[5] = input?.nextSibling;
                    }}
                    readOnly
                  />
                  <div className="dropdown-content"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-btn-cont">
            <button className="cart-btn" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
// Soulution: create a different file to store the items like we did in infograph(setSentences) and import it into app.