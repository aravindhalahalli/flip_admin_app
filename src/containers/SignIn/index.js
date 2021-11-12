import React, { useState, useEffect } from "react";
import Layout from "../../components/Layouts";
import Input from "../../components/UI/Input";
import { Form, Row, Col, Button } from "react-bootstrap";

import { isUserLoggedIn, login } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
const SignIn = () => {
  const auth = useSelector((state) => state.auth);
  console.log("auth", auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  useEffect(()=>{
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
  },[])

  const userLogin = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(login(user));
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  return (
    <Layout>
      <Row style={{ marginTop: "50px" }}>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={userLogin}>
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
            <Button variant="primary" type="submit">
              {" "}
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default SignIn;
