import { Container, Row, Col } from "react-bootstrap";

const MyFooter = (props) => (
  <>
    <Container>
      <Row ClassName="d-flex">
        <Col
          style={{
            backgroundColor: props.bg,
            color: props.color,
            display: props.df,
            justifyContent: props.justbetween,
          }}
        >
          <p style={{ fontSize: props.fs + "em" }}>{props.title}</p>
          <a href={props.href}>Contatti</a>
        </Col>
      </Row>
    </Container>
  </>
);

export default MyFooter;
