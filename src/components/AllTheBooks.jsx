import { Card, Button, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";

const AllTheBooks = () => (
  <Container>
    <Row>
      <h2 ClassName="text-center"> FANTASY </h2>
      {fantasy.map((book) => (
        <Card key={book.asin} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={book.img} alt={book.title} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.price}</Card.Text>
            <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>
      ))}
    </Row>
  </Container>
);
export default AllTheBooks;
