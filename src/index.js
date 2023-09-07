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
      <EventExample />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExample = () => {
  const handleFormInput = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    console.log("handle form input");
  };
  const handleButtonClick = () => {
    alert("handle form input");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

const Book = ({ author, title, img }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h2>{author}</h2>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
