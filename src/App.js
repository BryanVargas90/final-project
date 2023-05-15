import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SessionForm from "./scenes/SessionForm.jsx";




function App() {

  const [session, setSession ] = useState()
  
  return(
 <>
 <BrowserRouter>
 <Routes>
    <Route path="/" element={<SessionForm session={session} setSession={setSession} />} />


 </Routes>
 
 </BrowserRouter>
 
 </>

  )
}

export default App;
