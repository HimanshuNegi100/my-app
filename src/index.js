import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const title = "Atomic Habits";
const author = "James Clear";
const image = "./images/book-1.jpg";
const BookList = () => {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h2>{author}</h2>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
