import fantasy from "../data/fantasy.json";
import SingleBook from "./SingleBook";

const BookList = () => {
  fantasy.map((book) => SingleBook());
};

export default BookList;
