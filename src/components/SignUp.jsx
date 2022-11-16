import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="shadow-lg border-2 signUp-and-login-container">
      <h2 className="text-3xl p-8">Register</h2>
      {error && (
        <Alert variant="danger" className="p-8 text-rose-800">
          {error}
        </Alert>
      )}
      <Form className="mx-auto  text-center" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className="w-[400px] p-4 border-2  rounded-xl outline-0"
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className="w-[400px] p-4 border-2  rounded-xl outline-0"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button
            variant="primary"
            type="Submit"
            className="w-[400px] p-4 border-2  rounded-xl outline-0 bg-blue-800 text-white text-2xl"
          >
            Register
          </Button>
        </div>
      </Form>
      <div className="p-4 box mt-3 text-center">
        Already have an account
        <Link className="text-blue-800 underline mx-2" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};
export default SignUp;
