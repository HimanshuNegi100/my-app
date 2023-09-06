import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  title: "Atomic Habits",
  author: "James Clear",
  img: "./images/book-1.jpg",
};
const secondBook = {
  title: "The Psychology Of Money",
  author: "Morgan Housel",
  img: "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL900_SR900,600_.jpg",
};

const BookList = () => {
  return (
    <section className="bookList">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h2>{props.author}</h2>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
