import React from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "../../components/Layouts";

const Home = () => {
  return (
    <Layout>
      <Jumbotron style={{marginTop:'5rem',textAlign:'center'}}>
        <h1>Welcome to Admin DashBoard</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </Jumbotron>
    </Layout>
  )
}

export default Home;
