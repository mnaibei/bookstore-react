import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const Form = () => {
  const initial = {
    title: '',
    author: '',
  };

  const [state, setState] = useState(initial);
  const { books } = useSelector((state) => state.books);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      item_id: `item${books.length + 1}`, ...prev, [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (state.title.trim() !== '' && state.author.trim() !== '') {
      dispatch(addBook(state));
      setState(initial);
    }
  };

  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form action="submit" className="submit">
        <input type="text" className="title" placeholder="Book title" onChange={handleChange} name="title" value={state.title} />
        <input type="text" className="author" placeholder="Author" onChange={handleChange} name="author" value={state.author} />
        <button
          type="button"
          className="addBook"
          onClick={handleSubmit}
        >
          Add Book
        </button>
      </form>
    </>
  );
};

export default Form;
