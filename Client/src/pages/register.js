import React, { useState } from 'react';
import { Button,Modal,Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from "react-router-dom";
import Login from "../pages/login";

function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowLogin = Login

  function Switchtologin() {
    setShow(false)
    setShow(true)
  }
  // const handleNaviateToRegister = () => {
  //   Navigate('/Login')
  // }

  return (
    <>
      <Button variant="danger" className='ms-2 me-5 bg-danger' onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-danger '>Register</Modal.Title>
        </Modal.Header> 
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='inputProduct border-danger' type="email" placeholder="Email"  style={{width : '100%'}}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control className='inputProduct border-danger' type="password" placeholder="Password" style={{width : '100%'}}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control className='inputProduct border-danger' type="text" placeholder="Full Name" style={{width : '100%'}}/>
            </Form.Group>
            <Button className='float-sm-end bg-danger' variant="danger" type="submit">
                Register
            </Button>
            <div>
                <p>Already have an account ? klik 
                  <a onClick={Switchtologin}><b>here</b> </a> 
                </p>
            </div>
        </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
        <Login />
      </Modal>
    </>
  );
}

export default Register