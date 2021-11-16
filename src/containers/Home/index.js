import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Layout from "../../components/Layouts";
import './style.css';

const Home = () => {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar"> Sidebar </Col>
          <Col md={10} style={{marginLeft:'auto'}}>Main container</Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
