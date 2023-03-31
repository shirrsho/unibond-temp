import React, { useState, useParams } from "react";
import { Link } from "react-router-dom";
import '../styles/itemdetails.css';

export default function ItemDetails() {
  // const { id } = useParams();
  const product = {
    id: 1,
    name: "Item 1",
    description: "sa adew adwewdasd adadw adasdewrd adasdewdsc aded hassa uuwxsab hsauah",
    images: [
      {
        id: 1,
        src: 'https://source.unsplash.com/random/500x500',
      },
      {
        id: 2,
        src: 'https://source.unsplash.com/random/200x200',
      },
      {
        id: 3,
        src: 'https://source.unsplash.com/random/200x200',
      },
      {
        id: 4,
        src: 'https://source.unsplash.com/random/200x200',
      },
      {
        id: 5,
        src: 'https://source.unsplash.com/random/200x200',
      }
    ],
    price: 100
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const images = [
    {
      id: 1,
      src: 'https://source.unsplash.com/random/200x200',
    },
    {
      id: 2,
      src: 'https://source.unsplash.com/random/200x200',
    },
    {
      id: 3,
      src: 'https://source.unsplash.com/random/200x200',
    },
    {
      id: 4,
      src: 'https://source.unsplash.com/random/200x200',
    },
    {
      id: 5,
      src: 'https://source.unsplash.com/random/200x200',
    }
  ];

  const handleImageClick = (image) => {
    setQuantity(quantity + 1);
    setSelectedImage(image);
  };

  const handleFullScreenClick = () => {
    // TODO: Implement full screen functionality
    const largeImage = document.querySelector('.large-image-container img');
    if (largeImage) {
      largeImage.classList.toggle('fullscreen');
    }
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div className="detailssection">
    <div className="col-md-3">
      <div className="row">
        <div className="image-gallery">
          <div className="large-image-container">
            <img
              src={selectedImage ? selectedImage.src : product.images[0].src}
              alt={selectedImage ? `Image ${selectedImage.id}` : 'Default Image'}
              onClick={handleFullScreenClick}
            />
          </div>
          <div className="small-images-container">
            {images.map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt={`Image ${image.id}`}
                className={selectedImage === image ? 'selected' : ''}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-15" style={{padding:"10px"}}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <button className="buybtn"
            onClick={() =>
              alert(
                `You have added ${quantity} ${product.name} to your cart.`
              )
            }
          >
            Buy Now
          </button>
        </div>
    </div>
    </div>
  );
}