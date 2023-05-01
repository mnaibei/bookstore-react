// carries each individual book
const BookItem = ({ itemProp }) => (
  <>
    <li>{itemProp.title}</li>
    <li>{itemProp.author}</li>
    <button type="button">Remove</button>
  </>
);

export default BookItem;
