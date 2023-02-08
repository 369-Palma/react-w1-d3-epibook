import SingleBook from "./SingleBook";

const BookList = (props) => {
  return props.book.map((book) => <SingleBook {...book} />);
};

export default BookList;
