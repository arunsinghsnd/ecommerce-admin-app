import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";
import { login } from "../../actions";
import { useDispatch } from "react-redux";

const Signin = props => {
  const dispatch = useDispatch();
  const userLogin = e => {
    e.preventDefault();
    const user = {
      email: "arunsinghsnd@gmail.com",
      password: "Arun@55.com",
    };
    dispatch(login(user));
  };
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                label="Email"
                placeholder="Enter Email"
                value=""
                type="email"
                onChange={() => {}}
              />

              <Input
                label="Password"
                placeholder="Enter Password"
                value=""
                type="password"
                onChange={() => {}}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signin;
