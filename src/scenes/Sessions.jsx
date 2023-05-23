import { Col, Container, Row } from "react-bootstrap";
import { Fragment, useEffect } from "react";
import SessionPanel from "./SessionPanel";
import NavBar from "./MenuBar";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

export default function Sessions({ session, setSession }) {
  useEffect(() => {
    fetch("https://final-api-gaming.web.app/sessions")
      .then((resp) => resp.json())
      .then((data) => {
        setSession(data);
      })
      .catch((err) => console.log(err));
  }, [session]);

  return (
    <>
      {/* <NavBar /> */}
      {/* <Container sm={12} md={6} lg={3}> */}
      <section className="my-sessions">
        <Col></Col>
        <br />
        <h1 style={{ color: "white" }}>&nbsp; Sessions</h1>

        <Row className="d-flex justify-content-center">
          {!session ? (
            "Loading..."
          ) : (
            <>
              {session.map((sessions) => {
                return <SessionPanel session={sessions} setSession={setSession} />;
              })}
            </>
          )}
        </Row>
      </section>
    </>
  );
}
