import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../Providers/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const {createUser} = useContext(authContext);
    const [accepted,setAccepted] = useState(false)
    // register
    const handleRegister = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,photoUrl,email,password);
        createUser(email,password)
        .then(result=>{
            const createdUser = result.user;
            console.log(createdUser)
        })
        .catch(error=>{
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }
    const handleAccepted = (event)=>{
      setAccepted(event.target.checked)
    }
    return (
        <Container className="w-25 mx-auto">
        <h3 className="text-center mt-2">Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" required placeholder="Enter Name" />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="text" name="photo" required placeholder="Enter Photo Url" />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" required placeholder="Enter email" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" required placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={handleAccepted} type="checkbox" name='accept' label={<>Accept our <Link to='/terms' >terms and conditions</Link></>} />
        </Form.Group>
        <Form.Text className="text-danger">
          </Form.Text>
        <Form.Text className="text-success">
          </Form.Text>
        <Button disabled={!accepted} className="text-center" variant="primary" type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
            Already have an account?<Link to='/login'>Login</Link>
          </Form.Text>
      </Form>
    </Container>
    );
};

export default Register;