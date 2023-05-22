import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

export default function SessionPanel({ session, setSession }) {
  const id = session._id;
  const handleDelete = (e) => {
    e.preventDefault();
    fetch(`https://final-api-gaming.web.app/session/${id}`, {
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
    // <Col style={{ width: "18rem" }}>

    <Col md={6}>
      <div className="each-session">
        <div className="left-session">
          <h3>Host {session.host}</h3>
          {/* <div className="session-game">Game</div> */}
        </div>
        <div className="session-info">
          <p className="session-date">{session.date}</p>
          <p className="session-time">{session.time}</p>
          <div className="session-game">{session.game}</div>
          <div className="session-members">Members {session.members}</div>
        </div>
        <Link className="remove-session">
          <FaTrashAlt />
        </Link>
      </div>
    </Col>
  );
}
