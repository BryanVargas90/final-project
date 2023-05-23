import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "../styles/App.css";
// import { Container } from "react-dom";

export default function SessionForm({ setSession }) {
  // const [host, SetHostName] = useState("");
  // const [game, SetGame] = useState("");
  // const [date, SetDate] = useState("");
  // const [time, SetTime] = useState("");
  // const [members, setMembers] = useState("");
  const [formData, setFormData] = useState("");
  const navigate = useNavigate();

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddSession = async (e) => {
    const date = formData.date;
    const game = formData.gameName;
    const host = formData.hostName;
    const members = formData.members;
    const time = formData.time;

    e.preventDefault();
    fetch("https://final-api-gaming.web.app/session", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ host, game, date, time, members }),
    })
      .then((resp) => resp.json()) // These lines takes the response from the API call and converts it
      //it into a JavaScript object by calling the json method

      .then((data) => {
        // This defines a callback function that takes the object returned by the previous then() callback as its argument.
        if (data.message) {
          alert(data.message);
          return;
        }
        setSession(data);
        navigate("/session");
      })
      .catch(alert);
  };

  return (
    <section className="host-form">
      <Container>
        <br />
        <Form className="section-form">
          <Form.Group>
            <Form.Label>Host:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Host"
              name="hostName"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Game Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Host"
              name="gameName"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date:</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Host"
              name="date"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Time:</Form.Label>
            <Form.Control
              type="time"
              placeholder="Enter Host"
              name="time"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Members:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Host"
              name="members"
              onChange={onChange}
            />
          </Form.Group>
        </Form>
        <Button variant="primary" onClick={handleAddSession}>
          Submit{" "}
        </Button>
      </Container>
      {/* <Form onSubmit={handleAddSession} className="host-form">
        <Row>
          <Col>
            <label htmlFor="creator of the session">
              Host:
              <input
                type="text"
                value={host}
                onChange={(e) => {
                  SetHostName(e.target.value);
                }}
              />
            </label>
          </Col>

          <br />

          <label htmlFor="nameOfTheGame">
            Game:
            <input
              type="text"
              value={game}
              onChange={(e) => {
                SetGame(e.target.value);
              }}
            />
          </label>
        </Row>

        <br />
        <Row>
          <Col>
            <label htmlFor="date">
              {" "}
              Date of session:
              <input
                type="text"
                value={date}
                onChange={(e) => {
                  SetDate(e.target.value);
                }}
              />
            </label>
          </Col>
          <br />

          <Col>
            <label htmlFor="time">
              {" "}
              Time of Meet:
              <input
                type="text"
                value={time}
                onChange={(e) => {
                  SetTime(e.target.value);
                }}
              />
            </label>
          </Col>
        </Row>
        <Col>
          <label htmlFor="Members">
            {" "}
            Members:
            <input
              type="text"
              value={members}
              onChange={(e) => {
                setMembers(e.target.value);
              }}
            />
          </label>
        </Col>
        <br />
        <input type="submit" value="Add Session" />
      </Form> */}
    </section>
  );
}
