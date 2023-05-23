import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";

export default function MenuBar() {
  return (
    <>
      <Navbar
        fixed="top"
        className="navbar-game"
        style={{ marginBottom: 0, fontSize: 30 }}
      >
        <Container>
          <Navbar.Brand href="/" className="logo" style={{ paddingTop: 0 }}>
            GamerSync
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="navbar-game-links" href="/session">
              Sessions
            </Nav.Link>
            <Nav.Link className="navbar-game-links" href="/addsession">
              Add Session
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
