import { useEffect, useContext } from "react";
import "./App.css";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
import BooksContext from "./Context/books";

function App() {
  const { fetchBooks } = useContext(BooksContext);
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div className="app">
      <BookCreate />
      <BookList />
    </div>
  );
}

export default App;
