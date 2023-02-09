import SingleBook from "./SingleBook";
import { Row, Col } from "react-bootstrap";
import { Component } from "react";

/* const BookList = (props) => {
  return (
    <Row>
      {props.book.map((book) => (
        <Col xs={12} md={4} key={book.asin}>
          <SingleBook {...book} />;
        </Col>
      ))}
    </Row>
  );
}; */

class BookList extends Component {
  render() {
    return (
      <Row className="justify-content-center mt-3">
        {this.props.book.map((book) => (
          <Col xs={12} md={4} key={book.asin}>
            <SingleBook {...book} />
          </Col>
        ))}
      </Row>
    );
  }
}

export default BookList;
