// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
   const [checked, setChecked] = useState(false);
   //    console.log(checked);
   const handelRegister = (e) => {
      e.preventDefault();
      const from = e.target;
      const name = from.name.value;
      const email = from.email.value;
      const password = from.password.value;
      const url = from.photo.value;
      console.log(name, email, password, url, checked);
   };

   return (
      <Container className="bg-white my-5 px-5 w-50 mx-auto">
         <h2 className="text-center py-5">Register Your Account</h2>
         <hr className="border-secondary mb-5" />
         <Form className="px-5 pb-3" onSubmit={handelRegister}>
            <Form.Group className="mb-3" controlId="formBasicName">
               <Form.Label className="fw-bold text-secondary">Your Name</Form.Label>
               <Form.Control
                  className="border-0 bg-primary-subtle"
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  required
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
               <Form.Label className="fw-bold text-secondary">Photo URL</Form.Label>
               <Form.Control
                  className="border-0 bg-primary-subtle"
                  name="photo"
                  type="text"
                  placeholder="Enter Photo URL"
                  required
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label className="fw-bold text-secondary">Email address</Form.Label>
               <Form.Control
                  className="border-0 bg-primary-subtle"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  required
               />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label className="fw-bold text-secondary">Password</Form.Label>
               <Form.Control
                  className="border-0 bg-primary-subtle"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
               <Form.Check.Input type="checkbox" name="checked" onClick={() => setChecked(!checked)} />
               <Form.Check.Label className="ms-2">
                  Accept{" "}
                  <Link
                     className=" text-black"
                     to="https://www.termsfeed.com/live/a696c038-a3f7-4c30-b742-a4504968f865"
                  >
                     terms and conditions
                  </Link>
               </Form.Check.Label>
            </Form.Group>

            <Button
               variant="primary"
               type="submit"
               className={`w-100 rounded-0 bg-secondary border-0 mt-2 ${checked ? "" : "disabled"}`}
            >
               Register
            </Button>
            <Form.Text className="text-muted"></Form.Text>
         </Form>
         <p className="d-flex justify-content-center pb-5 text-secondary fw-semibold">
            Already Have An Account ?{"  "}
            <Link to="/login" className="ms-2 text-warning">
               Login
            </Link>
         </p>
      </Container>
   );
};

export default Register;