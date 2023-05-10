import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, postBooks } from '../redux/books/bookSlice';
import '../styles/form.css';

const Form = () => {
  const initial = {
    title: '',
    author: '',
  };

  const [state, setState] = useState(initial);
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      item_id: `item${books.length + 1}`, ...prev, [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (state.title.trim() !== '' && state.author.trim() !== '') {
      const book = {
        title: state.title,
        author: state.author,
        category: 'fiction',
        item_id: `item${books.length + 1}`,
      };

      try {
        await dispatch(postBooks(book));
        dispatch(addBook(book));
        setState(initial);
      } catch (error) {
        error(error);
      }
    }
  };

  return (
    <>
      <hr className="form-hr" />
      <div className="add-book">
        <h3>add new book</h3>
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
      </div>
    </>
  );
};

export default Form;
