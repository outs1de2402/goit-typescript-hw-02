import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Image } from "./App.types";

const ACCESS_KEY = "buZfoK5Htb_1o82guCsfJtUFVZioDfVqg6LJ30k7Tqs";

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [modalImage, setModalImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await axios.get<{ results: Image[] }>(
          `https://api.unsplash.com/search/photos`,
          {
            params: {
              query,
              page,
              client_id: ACCESS_KEY,
            },
          }
        );
        setImages((prevImages) =>
          page === 1
            ? response.data.results
            : [...prevImages, ...response.data.results]
        );
      } catch (error) {
        console.error("Fetch error:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image: Image) => {
    setModalImage(image);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal image={modalImage} onClose={handleCloseModal} />
      <ToastContainer />
    </div>
  );
};

export default App;
