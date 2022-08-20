import React, { useState } from 'react';
import {Button,Modal} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Usercontext } from '../context/user-context';

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate()

  const [setUser] = React.useContext(Usercontext)
  
  function handleOnSubmit(e) {
    e.preventDefault();

    const email = document.getElementById("email").value
    let status
    
    if (email === "admin@mail.com") {
      status = "admin"
      navigate('/admin')
    } else {
      status = "customer"
      navigate ('/home')
    }
  
    const data = { email, status }

    console.log(data);

    setUser({
      type: 'LOG_IN',
      payload: data
    })
  }



  return (
    <>
      <Button variant="primary" className='ms-2 me-2 bg-white border-danger text-danger' onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-danger'>Login</Modal.Title>
        </Modal.Header> 
        <Modal.Body>
        <form className="py2 px1-5 flex-col bg-white br10"
           onClick={ (e) => e.stopPropagation() }
           onSubmit={ handleOnSubmit }
          >
            <h2 className="mb1-75 txt-red fw700">Register</h2>
            <input className="modal-input br-red br5 mb1 fs0-9"
             type="email"
             id="email" name="email"
             placeholder="Email"
            />
            <input className="modal-input br-red br5 mb1 fs0-9"
             type="password"
             id="password" name="password"
             placeholder="Password"
            />
            <input className="modal-input br-red br5 mb2 fs0-9"
             type="text"
             id="name" name="name"
             placeholder="Full Name"
            />
            <button className="pt0-3 pb0-5 mb1 bg-red br-none br5 fs0-9 fw500 txt-white"
             type="submit"
            >Register</button>
            <p className="fs0-9 fw500 ta-center">Already have an account ? Click <strong className="cursor-pointer"
             >Here</strong>
            </p>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login