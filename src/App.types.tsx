// src/App.types.tsx

export interface Image {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular?: string;
    full?: string;
  };
  user: {
    name: string;
  };
  likes?: number;
}

export interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

export interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

export interface ImageModalProps {
  image: Image | null;
  onClose: () => void;
}

export interface LoadMoreBtnProps {
  onClick: () => void;
}

export interface SearchBarProps {
  onSubmit: (query: string) => void;
}
