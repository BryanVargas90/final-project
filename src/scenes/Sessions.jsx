import { Col, Container, Row } from "react-bootstrap";
import { Fragment, useEffect } from "react";
import SessionPanel from "./SessionPanel";
import NavBar from "./NavBar";
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
        <Container>
          <div className="center-div">
            <h1>Sessions</h1>
          </div>
          <Row>
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
        </Container>
      </section>
    </>
  );
}
