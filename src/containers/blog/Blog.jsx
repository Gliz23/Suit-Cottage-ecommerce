import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Description } from '../../containers';


const images = [
  { id: 1, src: require('../../assets/Jackets/1.jpg'), description: 'Official Men\'s Suit (Brown) with Light Brown Trousers', price: 'GHc 200' },
  { id: 2, src: require('../../assets/Jackets/2.jpg'), description: 'Official Men\'s Suit (Brown) with Light Brown Trousers', price: 'GHc 200' },
  { id: 3, src: require('../../assets/Jackets/3.jpg'), description: 'Official Men\'s Suit (Brown) with Light Brown Trousers', price: 'GHc 200' },
  { id: 4, src: require('../../assets/Jackets/4.jpg'), description: 'Official Men\'s Suit (Brown) with Light Brown Trousers', price: 'GHc 200' },
  { id: 5, src: require('../../assets/Jackets/5.jpg'), description: 'Official Men\'s Suit (Brown) with Light Brown Trousers', price: 'GHc 200' },
  { id: 6, src: require('../../assets/Jackets/6.jpg'), description: 'Official Men\'s Suit (Brown) with Light Brown Trousers', price: 'GHc 200' },
  { id: 7, src: require('../../assets/Jackets/7.jpg'), description: 'Official Men\'s Suit (Brown) with Light Brown Trousers', price: 'GHc 200' },
];

const ImageCard = React.memo(({ image, onImageClick }) => (
  <div className="part" key={image.id}>
    <div className="parta">
      <img
        src={image.src}
        alt={`Boy in casual wear ${image.id}`}
        className="casual-img"
        onClick={() => onImageClick(image)}
      />
    </div>
    <div className="partb">
      <h2 className="descr">{image.description}</h2>
      <h3 className="price">{image.price}</h3>
    </div>
  </div>
));

const Blog = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="on-boarding">
      <div className="section1">
        <div className="row">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} onImageClick={handleImageClick} />
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <Description
              img={selectedImage.src}
              description={selectedImage.description}
              price={selectedImage.price}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;