import React from "react";
import Modal from "react-modal";
import { ImageModalProps } from "../../App.types";

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <Modal isOpen={!!image} onRequestClose={onClose}>
      {image && (
        <>
          <img
            src={image.urls.regular ?? image.urls.small}
            alt={image.alt_description ?? "Image"}
          />
          <p>Автор: {image.user.name}</p>
          <p>Лайки: {image.likes ?? 0}</p>
          <button onClick={onClose}>Закрити</button>
        </>
      )}
    </Modal>
  );
};

export default ImageModal;
