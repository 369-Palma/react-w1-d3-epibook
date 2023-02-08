import Card from "react-bootstrap/Card";

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
