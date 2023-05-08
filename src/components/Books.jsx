import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const Books = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((store) => store.books);

  return (
    <>
      <ul className="displayedBooks">
        {books.map((book) => (
          <div key={book.item_id}>
            <li>{book.title}</li>
            <li>{book.author}</li>
            <button
              type="button"
              onClick={() => {
                dispatch(removeBook(book.item_id));
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Books;
