import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form } from "react-bootstrap"


export default function SessionForm({ setForms,setSession,session }) {

    const [hostName, SetHostName] = useState ("")
    const [nameOfTheGame, SetGame] = useState ("")
    const [date, SetDate] = useState ("")
    const [time, SetTime] = useState ("")
    const navigate = useNavigate 


const handleAddSession = (e) => {
    e.preventDefault()

fetch("https://final-api-gaming.web.app/session", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({hostName, nameOfTheGame, date, time})
})
.then(resp => resp.json()) // These lines takes the response from the API call and converts it
//it into a JavaScript object by calling the json method

.then(data => { // This defines a callback function that takes the object returned by the previous then() callback as its argument.
    if (data.message) {
        alert(data.message)
        return 
    }
    setSession(data)
    navigate("/session")
})
.catch(alert)

}

return(
    <Form onSubmit={handleAddSession} >
    <label htmlFor="creator of the session">Host:
        <input type="text"
            value={hostName}
            onChange={(e) => { SetHostName(e.target.value) }} />
    </label>
    
    <br />

    <label htmlFor="nameOfTheGame">Game:
                <input
                    type="text"
                    value={nameOfTheGame}
                    onChange={(e) => { SetGame(e.target.value) }} />
            </label>

        <br />

        <label htmlFor="date"> Date of session:
            <input
                type="text"
                value={Date}
                onChange={(e) => { SetDate(e.target.value) }} />
        </label>

        <br />

        <label htmlFor="time"> Time of Meet:
            <input 
                type= "text"
                value={time}
                onChange={(e) => {SetTime(e.target.value)}} />

        </label>

        <br />
        <input type="submit" value="Add Session" />

    </Form>
)
}

