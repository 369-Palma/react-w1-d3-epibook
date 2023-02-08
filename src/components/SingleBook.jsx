import Card from "react-bootstrap/Card";

/* book = {
  asin: "0316438960",
  title: "The Last Wish: Introducing the Witcher",
  img: "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
  price: 9.59,
  category: "fantasy",
}; */
const SingleBook = ({ title, copertina }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={copertina} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
