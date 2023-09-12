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
  const getBook = (id) => {
    console.log(books.find((book) => book.id === id));
  };
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = ({ author, title, img, getBook, id }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => getBook(id)}>Display Book</button>
      <h2>{author}</h2>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
