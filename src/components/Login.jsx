import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className=" shadow-lg border-2 signUp-and-login-container">
      <h2 className="text-3xl p-8">Login</h2>

      {error && (
        <Alert variant="danger" className="p-8 text-rose-800">
          {error}
        </Alert>
      )}
      <Form className="mx-auto  text-center" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className="w-[350px] p-4 border-2  rounded-xl outline-0"
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className="w-[350px] p-4 border-2  rounded-xl outline-0"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button
            variant="primary"
            type="Submit"
            className="w-[350px] p-4 border-2  rounded-xl outline-0 bg-blue-800 text-white text-2xl"
          >
            Log In
          </Button>
        </div>
      </Form>
      <div className="p-4 box mt-3 text-center">
        Don't have an account?
        <Link className="text-blue-800 underline mx-2" to="/signup">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
