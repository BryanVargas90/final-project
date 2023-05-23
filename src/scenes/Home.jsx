import Typewriter from "typewriter-effect";
import { Col, Row, Container } from "react-bootstrap";

export default function Home() {
  return (
    <div className="host-form">
      <Container>
        <Row>
          <Col>
            <Typewriter
              className="typewriter"
              onInit={(typewriter) => {
                typewriter
                  .typeString("gaming sessions ")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .typeString("gaming sessions ")
                  .start();
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
