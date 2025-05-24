import ImageCard from "../ImageCard/ImageCard";
const ImageGallery = ({ images, onImageClick }) => {
  if (!Array.isArray(images)) {
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
