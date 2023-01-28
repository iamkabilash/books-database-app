import { useEffect } from "react";
import "./App.css";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
import useBooksContext from "./Hooks/useBooksContext";

function App() {
  const { fetchBooks } = useBooksContext();
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
