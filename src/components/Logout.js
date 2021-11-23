import React from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Image,
} from "react-bootstrap";
const Logout = ({ logout }) => {
  return (
    <Container className="flex justify-content-center mt-6">
      <Card style={{ width: "16rem" }}>
        <div className="flex justify-content-center mt-3">
          <Image
            src="https://randomuser.me/api/portraits/men/11.jpg"
            className="rounded-circle mb-3 w-50"
          />
        </div>
        <Card.Body>
          <Card.Title>John Doe</Card.Title>
          <Card.Text>johndoe@amail.com</Card.Text>
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
