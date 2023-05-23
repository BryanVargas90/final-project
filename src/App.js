import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SessionForm from "./scenes/SessionForm.jsx";
import Sessions from "./scenes/Sessions.jsx";
import SessionPanel from "./scenes/SessionPanel.jsx";
// import SiteNavbar from "./scenes/NavBar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

import MenuBar from "./scenes/MenuBar.jsx";
import Home from "./scenes/Home.jsx";

function App() {
  const [session, setSession] = useState();

  return (
    <>
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route
            path="/addsession"
            element={<SessionForm session={session} setSession={setSession} />}
          />
          <Route
            path="/session"
            element={<Sessions session={session} setSession={setSession} />}
          />

          <Route path="/deleteSession" session={session} setSession={setSession} />
          <Route path="/" element={<Home />} />
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
