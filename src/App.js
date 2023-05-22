import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SessionForm from "./scenes/SessionForm.jsx";
import Sessions from "./scenes/Sessions.jsx";
import SessionPanel from "./scenes/SessionPanel.jsx";
import NavBar from "./scenes/NavBar.jsx";
import Home from "./scenes/Home.jsx";
import "./styles/App.css";

function App() {
  const [session, setSession] = useState();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route
            path="/"
            element={<SessionForm session={session} setSession={setSession} />}
          /> */}
          <Route
            path="/session"
            element={<Sessions session={session} setSession={setSession} />}
          />
          <Route path="deleteSession" session={session} setSession={setSession} />
          <Route
            path="/SessionPanel"
            element={<SessionPanel session={session} setSession={setSession} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
