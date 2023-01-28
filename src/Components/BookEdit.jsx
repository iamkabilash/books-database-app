import { useState } from "react";
import useBooksContext from "../Hooks/useBooksContext";

function BookEdit({ book, onEditSubmit }) {
  const [title, setTitle] = useState(book.title);

  const { editBookById } = useBooksContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    onEditSubmit();
    editBookById(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input
        type="text"
        className="input"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
