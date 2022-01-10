import React, {useState} from 'react';
import {Modal, Form, Button} from 'react-bootstrap';


const LoginModal = ({show, toggle, login})=> {
   const [userName, setUserName] = useState('');
   const [password, setPassword] = useState('');

   const handleUserNameChange = (e)=> setUserName(e.target.value);
   const handlePasswordChange = (e)=> setPassword(e.target.value);

   const handleLogin = (e)=> {
      e.preventDefault();
      login(userName, password);
   }
   return (
      <Modal show={show} onHide={toggle}>
      <Modal.Header  closeButton>
         <Modal.Title>Login</Modal.Title> 
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleLogin}>
          <Form.Group>
            <Form.Label htmlFor="username">Username:</Form.Label>
            <input className="ms-2" type="text" id="username" name="username"
              value={userName} onChange={handleUserNameChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password:</Form.Label>
            <input className="ms-3" type="password" id="password" name="password"
            value={password} onChange={handlePasswordChange} />
          </Form.Group>
            <Button type="submit" value="submit" className="bg-primary">Login </Button>
   
        </Form>
      </Modal.Body>
    </Modal>
   )
}

export default LoginModal;