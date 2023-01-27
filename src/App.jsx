import { useState, useEffect } from "react";
import "./App.css";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
import axios from "axios";

function App() {
  const createBook = async (title) => {
    // console.log(title);
    // const updatedBooks = [
    //   ...books,
    //   { id: Math.floor(Math.random() * 9999), title },
    // ];
    // setBooks(updatedBooks);

    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };
  const deleteBookById = async (id) => {
    // const updatedBooks = books.filter((book) => {
    //   return book.id !== id;
    // });
    // setBooks(updatedBooks);

    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  const editBookById = async (id, newTitle) => {
    // const updatedBooks = books.map((book) => {
    //   if (book.id === id) {
    //     return { ...book, title: newTitle };
    //   }
    //   return book;
    // });
    // setBooks(updatedBooks);

    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data }; // adds all the response data it has. Useful if 2 users are updating a record at the same time.
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div className="app">
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    </div>
  );
}

export default App;
