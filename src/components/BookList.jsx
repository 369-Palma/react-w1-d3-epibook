import SingleBook from "./SingleBook";

const BookList = (book) => {
  return book.book.map((book) => <SingleBook book={book} />);
};

export default BookList;
