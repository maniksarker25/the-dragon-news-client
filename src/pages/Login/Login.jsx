import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Providers/AuthProvider";

const Login = () => {
    const {signIn} = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/category/0';


    // login 
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password)
        // sign in 
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from,{replace:true})
        })
        .catch(error=>{
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }

  return (
    <Container className="w-25 mx-auto">
        <h3 className="text-center mt-2">Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" required placeholder="Enter email" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" required placeholder="Password" />
        </Form.Group>
        <Form.Text className="text-danger">
          </Form.Text>
        <Form.Text className="text-success">
          </Form.Text>
        <Button className="text-center" variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
            Don't have an account?<Link to='/register'>Register</Link>
          </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
