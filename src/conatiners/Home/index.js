import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import "./style.css";

const Home = () => {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
            Side Bar
          </Col>
          <Col md={10} style={{ marginLeft: "auto" }}>
            Container
          </Col>
        </Row>
      </Container>

      {/* <Jumbotron
        className="text-center"
        style={{ margin: "5rem", backgroundColor: "white" }}
      >
        <h1>Welcome to Admin Dashboard</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          neque itaque possimus quibusdam dignissimos, error quaerat quo
          pariatur vero quidem quasi ad libero beatae corporis rerum nemo ipsa
          repudiandae impedit?
        </p>
      </Jumbotron> */}
    </Layout>
  );
};

export default Home;
