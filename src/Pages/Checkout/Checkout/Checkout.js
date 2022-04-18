import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const Checkout = () => {
    const emailRef = useRef('');

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        if (email) {
            toast('Your booking is completed');
        }
        else {
            toast('Please enter your email address');
        }
    }

    return (
        <div className='container w-50 mx-auto mt-5 mb-5'>
            <h2 className='text-center'>Please Checkout</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="name" placeholder="Enter Name" required />
                    <br />
                    <Form.Control type="address" placeholder="Enter Address" required />
                    <br />
                    <Form.Control type="phone" placeholder="Enter Phone Number" required />
                    <br />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="btn btn-dark w-50 mx-auto d-block mb-2" type="submit">
                    Checkout
                </Button>
            </Form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Checkout;