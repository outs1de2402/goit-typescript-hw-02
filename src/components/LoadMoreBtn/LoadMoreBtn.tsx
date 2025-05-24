// src/components/LoadMoreBtn.tsx

import React from "react";
import { LoadMoreBtnProps } from "../../App.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <button onClick={onClick}>Load More</button>
    </div>
  );
};

export default LoadMoreBtn;
