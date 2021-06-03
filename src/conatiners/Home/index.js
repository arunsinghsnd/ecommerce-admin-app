import React from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "../../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Jumbotron
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
      </Jumbotron>
    </Layout>
  );
};

export default Home;
