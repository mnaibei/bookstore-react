const Form = () => (
  <>
    <h3>ADD NEW BOOK</h3>
    <form action="submit" className="submit">
      <input type="text" className="title" placeholder="Book title" />
      <input type="text" className="author" placeholder="Author" />
      <button type="button" className="addBook">Add Book</button>
    </form>
  </>
);

export default Form;
