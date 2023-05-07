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
      <ul className="displayedBooks">
        {books.map((book) => (
          <div key={book.id}>
            <li>{book.title}</li>
            <li>{book.author}</li>
            <button type="button">Remove</button>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Books;
