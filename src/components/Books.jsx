import BooksList from './BooksList';

// carries list of books
const Books = () => {
  const books = [
    {
      id: 1,
      title: 'Harry Potter and the Deathly Hallows',
      author: 'JK Rowling',
    },
    {
      id: 2,
      title: 'The DaVinci Code',
      author: 'Dan Brown',
    },
    {
      id: 3,
      title: 'Beloved',
      author: 'Toni Morrison',
    },
  ];

  return (
    <>
      <BooksList key={books.id} bookProps={books} />
    </>
  );
};

export default Books;
