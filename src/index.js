import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    img: "./images/book-1.jpg",
    id: 1,
  },
  {
    title: "The Psychology Of Money",
    author: "Morgan Housel",
    img: "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const Book = ({ author, title, img }) => {
  const displayTitle = () => {
    console.log(title);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>Display Title </button>
      <h2>{author}</h2>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
