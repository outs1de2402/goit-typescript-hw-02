import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import { ImageGalleryProps } from "../../App.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  if (!Array.isArray(images) || images.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
