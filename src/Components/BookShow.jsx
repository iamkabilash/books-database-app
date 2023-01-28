import { useState } from "react";
import BookEdit from "./BookEdit";

import useBooksContext from "../Hooks/useBooksContext";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);

  const { deleteBookById } = useBooksContext();

  const onEditSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onEditSubmit={onEditSubmit} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300`} alt="random" />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          Edit
        </button>
        <button className="delete" onClick={() => deleteBookById(book.id)}>
          X
        </button>
      </div>
    </div>
  );
}

export default BookShow;
