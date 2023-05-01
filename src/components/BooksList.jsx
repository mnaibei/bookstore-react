import BookItem from './BookItem';

// displays all books
const BooksList = ({ bookProps }) => (
  <ul className="displayedBooks">
    {bookProps.map((book) => (
      <BookItem key={book.id} itemProp={book} />
    ))}
  </ul>
);

export default BooksList;
