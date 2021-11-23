import React from "react";
import { Card, ListGroup, ListGroupItem, Container } from "react-bootstrap";
const Logout = ({ logout, email }) => {
  return (
    <Container className=" flex justify-content-center mt-5">
      <Card style={{ width: "16rem" }}>
        <Card.Img
          variant="top"
          src="https://randomuser.me/api/portraits/men/11.jpg"
          className="rounded-circle mb-3"
        />
        <Card.Body>
          <Card.Title>John Doe</Card.Title>
          <Card.Text>
            <h2>{email}</h2>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Registration Date : 22/11/2019</ListGroupItem>
          <ListGroupItem>Gender : Man</ListGroupItem>
          <ListGroupItem>Address : Amsterdam/The Netherlands</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <button
            className="w-full rounded-md py-2 px-5 flex items-center justify-center  font-medium text-gray-800 customized-btn"
            onClick={logout}
          >
            Logout
          </button>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Logout;
