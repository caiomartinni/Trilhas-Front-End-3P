import React from "react";
import "./Gallery.css";

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((src, index) => (
        <img key={index} src={src} alt="Gallery item" />
      ))}
    </div>
  );
};

export default Gallery;
