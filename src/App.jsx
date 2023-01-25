import { useState } from "react";
import "./App.css";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";

function App() {
  const createBook = (title) => {
    // console.log(title);
    const updatedBooks = [
      ...books,
      { id: Math.floor(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const [books, setBooks] = useState([]);
  return (
    <div className="app">
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    </div>
  );
}

export default App;
