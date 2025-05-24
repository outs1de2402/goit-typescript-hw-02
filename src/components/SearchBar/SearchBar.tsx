import React, { useState, FormEvent, ChangeEvent } from "react";
import { toast } from "react-toastify";
import { SearchBarProps } from "../../App.types";

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Введіть текст для пошуку");
    } else {
      onSubmit(query.trim());
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
