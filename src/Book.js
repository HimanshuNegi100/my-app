const Book = ({ author, title, img }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h2>{author}</h2>
    </article>
  );
};

export default Book;
