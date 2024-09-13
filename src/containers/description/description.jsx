import React, { useState, useRef, useEffect, useMemo } from 'react';
import './description.css';
import { setCartItems } from '../../product.jsx';

const Description = (props) => {
  const [activeBtn, setActiveBtn] = useState('regular');
  const sizeInputs = useRef([]);
  const dropdownContents = useRef([]);
  const [cartItems, setCartItems] = useState([]);
  const availableSizes = useMemo(() => ['Small', 'Medium', 'Large', 'X-Large'], []);
  const [product, setProduct] = useState({
    img: props.img,
    name: props.name,
    price: props.price,
    description: props.description,
    size: '',
  });

  const handleSizeBtnClick = (btn) => {
    setActiveBtn(btn);
    setProduct((prevProduct) => ({ ...prevProduct, size: btn }));
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const addToCart = () => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  useEffect(() => {
    populateDropdowns();
  }, []);

  const populateDropdowns = () => {
    sizeInputs.current.forEach((input, index) => {
      const dropdownContent = dropdownContents.current[index];
      dropdownContent.innerHTML = ''; // Clear the dropdown content
      availableSizes.forEach((size) => {
        const option = document.createElement('div');
        option.textContent = size;
        option.addEventListener('click', () => {
          input.value = size;
          dropdownContent.style.display = 'none';
          setProduct((prevProduct) => ({ ...prevProduct, size }));
        });
        dropdownContent.appendChild(option);
      });

      input.addEventListener('click', () => {
        dropdownContent.style.display = 'block';
      });
    });
  };

  return (
    <div className="description">
      <div className="heroa">
        <img src={props.img} alt={props.name} className="description-img" />
      </div>
      <div className="herob">
        <div className="desc">
          <h2 className="heading">{props.name}</h2>
          <p className="desc-text">{props.description}</p>
          <p className="price">Price: ${props.price}</p>
        </div>
      </div>
      <div className="heroc">
        <div className="size-box">
          <div className="size-title">
            <p>Choose the perfect size here</p>
          </div>
          <div className="size-btns">
            {['Small', 'Regular', 'Large', 'Extra Large'].map((size) => (
              <button
                key={size}
                className={activeBtn === size.toLowerCase() ? 'yes' : 'no'}
                onClick={() => handleSizeBtnClick(size.toLowerCase())}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="sizes">
            <div className="Jacket">
              <div className="size">
                <h3 className="top">Jacket</h3>
                <div className="dropdown">
                  <input
                    type="text"
                    id="jacketSize"
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
                <h3 className="top">Jacket Length</h3>
                <div className="dropdown">
                  <input
                    type="text"
                    id="jacketLength"
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
                <h3 className="top">Trouser Waist</h3>
                <div className="dropdown">
                  <input
                    type="text"
                    id="trouserWaist"
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
                <h3 className="top">Trouser Length</h3>
                <div className="dropdown">
                  <input
                    type="text"
                    id="trouserLength"
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
                <h3 className="top">Waistcoat Length</h3>
                <div className="dropdown">
                  <input
                    type="text"
                    id="waistcoatLength"
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
                <h3 className="top">Waistcoat Fit</h3>
                <div className="dropdown">
                  <input
                    type="text"
                    id="waistcoatFit"
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
            <button className="cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;