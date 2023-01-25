import { useState } from "react";

function BookEdit({ book, onEdit, onEditSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onEditSubmit(book.id, title);
  };

  const [title, setTitle] = useState(book.title);
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
