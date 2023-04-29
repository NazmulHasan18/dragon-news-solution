// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Login = () => {
   const { loginEmailAccount } = useContext(AuthContext);
   const navigate = useNavigate();
   const [err, setErr] = useState("");

   const location = useLocation();
   const from = location.state?.pathname || "/";

   const handelLogin = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      loginEmailAccount(email, password)
         .then((result) => {
            // Signed in
            const user = result.user;
            console.log(user);
            navigate(from);

            // ...
         })
         .catch((error) => {
            const errorMessage = error.message;
            setErr(errorMessage);
         });
   };
   return (
      <Container className="bg-white my-5 px-5 w-50 mx-auto">
         <h2 className="text-center py-5">Login Your Account</h2>
         <hr className="border-secondary mb-5" />
         <Form className="px-5 pb-3" onSubmit={handelLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label className="fw-bold text-secondary">Email address</Form.Label>
               <Form.Control
                  className="border-0 bg-primary-subtle"
                  name="email"
                  type="email"
                  placeholder="Enter email"
               />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label className="fw-bold text-secondary">Password</Form.Label>
               <Form.Control
                  className="border-0 bg-primary-subtle"
                  name="password"
                  type="password"
                  placeholder="Password"
               />
            </Form.Group>

            <Form.Text className="text-danger">{err}</Form.Text>

            <Button variant="primary" type="submit" className="w-100 rounded-0 bg-secondary border-0 mt-2">
               Login
            </Button>
            <Form.Text className="text-muted"></Form.Text>
         </Form>
         <p className="d-flex justify-content-center pb-5 text-secondary fw-semibold">
            Do not Have An Account ?{"  "}
            <Link to="/register" className="ms-2 text-warning">
               Register
            </Link>
         </p>
      </Container>
   );
};

export default Login;
