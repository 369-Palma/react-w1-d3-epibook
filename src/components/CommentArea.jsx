import { Form, Container, Row, Col } from "react-bootstrap";
import { Component } from "react";

class CommentArea extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Comments</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows={5}
                placeholder="Comments"
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CommentArea;
