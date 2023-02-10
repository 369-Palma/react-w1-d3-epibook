/* import { Form, Container, Row, Col } from "react-bootstrap";
 /*  import { Component } from "react"; */

/* class CommentArea extends Component {
  render() {
    return(
const FecthComments = async () => {
    try { 
        const res = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.book}` ,{
    headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0Zjk0MWEyNDc4ZDAwMTNhMDU4MDEiLCJpYXQiOjE2NzU5NTA0MDIsImV4cCI6MTY3NzE2MDAwMn0.8WX__gUohnPoeK9KII8Pxp7x_awNiyUErj7_W5ihJWk"
    }
    })
     if(res.ok) {
        const data = await res.json() 
        this.setState({ reservations: data })
    } else {
        console.log('error while fetching')
    } 
} 
catch(error) { 
    alert(`Ops, c'è stato un errrore del tipo`, error) }

  }

  )
}

  /*  FecthComments() */

/*   return
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
      </Container> */

/* export default CommentArea; */
