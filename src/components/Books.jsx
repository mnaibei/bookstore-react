import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, getBooks, deleteBook } from '../redux/books/bookSlice';
import '../styles/books.css';

const Books = () => {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        {error.message}
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="no-books">
        <h1>No books found.</h1>
      </div>
    );
  }

  return (
    <>
      <ul className="displayedBooks">
        {books.map((book) => (
          <li key={book.item_id} className="book-cards">
            <div className="book-info">
              <p className="category">{book.category}</p>
              <p className="book-title">{book.title}</p>
              <p className="author">{book.author}</p>
              <div className="btn-container">
                <button type="button">comments</button>
                <hr className="card-hr" />
                <button
                  type="button"
                  onClick={() => {
                    dispatch(removeBook(book.item_id));
                    dispatch(deleteBook(book.item_id));
                  }}
                >
                  remove
                </button>
                <hr className="card-hr" />
                <button type="button">edit</button>
              </div>
            </div>
            <div className="progress-percent">
              <div className="rotate">
                <span className="circle"> </span>
              </div>
              <div className="test">
                <p className="percent">65%</p>
                <p className="completed">Completed</p>
              </div>
            </div>
            <hr className="chapter-hr" />
            <div className="current-chapter-container">
              <p className="current-chapter">Current Chapter</p>
              <p className="chapter">Chapter 20</p>
              <button type="button" className="progress">Update Progress</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Books;
