import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Trash3Fill } from "react-bootstrap-icons";
// import "../styles/deleteButton.css";

export default function DeleteSession({ setSession }) {
  // const [deleteSession, setDeleteSession] = useState();

  const handleDelete = (e) => {
    e.preventDefault();
    fetch(`https://final-api-gaming.web.app/session/${sessionId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(setSession)
      .catch(alert);
  };

  return (
    <>
      {user ? (
        <></>
      ) : (
        <Container>
          <Row>
            <Col id="trash-button">
              <Button onClick={handleDelete}>
                <Trash3Fill />
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
