import React, { useState, useEffect } from 'react';
import Layout from "../../components/Layouts";
import Input from '../../components/UI/Input';
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  return (
    <Layout>
      <Row style={{ marginTop: "50px" }}>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Input
              label="Email"
              placeholder="Email"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              placeholder="Password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  )
}

export default SignIn;