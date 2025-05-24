import Modal from "react-modal";

const ImageModal = ({ image, onClose }) => (
  <Modal isOpen={image} onRequestClose={onClose}>
    <img src={image?.urls.regular} alt={image?.alt_description} />
    <p>Автор: {image?.user.name}</p>
    <p>Лайки: {image?.likes}</p>
    <button onClick={onClose}>Закрити</button>
  </Modal>
);

export default ImageModal;
