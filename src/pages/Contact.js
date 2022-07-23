import React, { useState,useRef } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  const [show, setShow] = useState(false);
    const formRef = useRef(null);
 const handleReset = () => {
    formRef.current.reset();

  }
  const sendHandler = (e) => {
    e.preventDefault();
    handleReset();
    setShow(true);
    setTimeout(() => setShow(false), 3000);
  };
  return (
    <Container className="w-50">
      {show && <Alert variant={"success"}>Message is sent successfully!</Alert>}
      <Form onSubmit={sendHandler} ref={formRef} >
        <Form.Group className="mb-3 mt-5">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} required />
        </Form.Group>
        <Form.Group className="mb-3 text-center">
          <Button
            type="submit"
            className="customized-btn w-50  border-none py-1 py-sm-3  text-dark"
          >
            <span className="block align-center">
              Send <SendIcon />
            </span>
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};
export default Contact;
