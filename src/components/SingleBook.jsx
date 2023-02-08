import { Card, Button } from "react-bootstrap";

const SingleBook = (prop) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={prop.img} />
      <Card.Body>
        <Card.Title>{prop.title}</Card.Title>
      </Card.Body>
      <Card.Body>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
