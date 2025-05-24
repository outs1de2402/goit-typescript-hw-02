// src/components/ImageCard.tsx

import React from "react";
import { ImageCardProps } from "../../App.types";

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description ?? "Image"}
        onClick={() => onClick(image)}
      />
    </div>
  );
};

export default ImageCard;
