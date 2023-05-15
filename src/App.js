import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SessionForm from "./scenes/SessionForm.jsx";
import Sessions from "./scenes/Sessions.jsx";




function App() {

  const [session, setSession ] = useState()
  
  return(
 <>
 <BrowserRouter>
 <Routes>
    <Route path="/" element={<SessionForm session={session} setSession={setSession} />} />
    <Route path="/session" element={<Sessions/>}/>

 </Routes>
 
 </BrowserRouter>
 
 </>

  )
}

export default App;
