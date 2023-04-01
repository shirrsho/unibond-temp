import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../styles/itemdetails.css';
import { getAproduct } from "../functionalities";

export default function ItemDetails() {
  const { item_id } = useParams();
  const [product,setProduct] = useState(null);
  // console.log(product);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleFullScreenClick = () => {
    // TODO: Implement full screen functionality
    const largeImage = document.querySelector('.large-image-container img');
    if (largeImage) {
      largeImage.classList.toggle('fullscreen');
    }
  };

  async function getProduct(item_id){
    setProduct(await getAproduct(item_id));
  }

  useEffect(()=>{
    getProduct(item_id);
  },[item_id]);

  return (
    <div className="detailssection">
    <div className="col-md-3">
      <div className="row">
        <div className="image-gallery">
          <div className="large-image-container">
          {/* {product} */}
            <img
              src={selectedImage ? selectedImage : product?.images[0]}
              alt={selectedImage ? `Img` : 'Default Image'}
              onClick={handleFullScreenClick}
            />
          </div>
          <div className="small-images-container">
            {product!=null && product.images.map((image, key) => (
              <img
                key={key}
                src={image}
                alt={`Img`}
                className={selectedImage === image ? 'selected' : ''}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-15" style={{padding:"10px"}}>
          <h1>{product?.name}</h1>
          <p>{product?.description}</p>
          <p>Price: ${product?.price}</p>
          <p>{product?.stock} items left</p>

          <Link to={`${process.env.PUBLIC_URL}/buy/${item_id}`}><button className="buybtn">Buy Now</button></Link>
        </div>
    </div>
    </div>
  );
}
