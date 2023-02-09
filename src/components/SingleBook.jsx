import { Card, Button } from "react-bootstrap";
/* import CommentArea from "./CoomentArea"; */
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Card
          style={{
            width: "18rem",
            border: this.state.selected ? "1px solid green" : "",
          }}
        >
          <Card.Img
            variant="top"
            src={this.props.img}
            onClick={() =>
              this.setState({
                selected: !this.state.selected,
              })
            }
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
          </Card.Body>
          <Card.Body>
            <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

/* const SingleBook = (props) => {
  return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
        <Card.Body>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
  );
}; */

export default SingleBook;
