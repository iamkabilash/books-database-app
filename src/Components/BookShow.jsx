import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const onEditSubmit = (book, newTitle) => {
    onEdit(book, newTitle);
    setShowEdit(false);
  };

  const [showEdit, setShowEdit] = useState(false);

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = (
      <BookEdit onEdit={onEdit} book={book} onEditSubmit={onEditSubmit} />
    );
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300`} alt="random" />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          Edit
        </button>
        <button className="delete" onClick={() => onDelete(book.id)}>
          X
        </button>
      </div>
    </div>
  );
}

export default BookShow;
