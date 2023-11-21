import { useState } from "react"
import "./lottery.css";
import { genTicket ,sum} from "./helper";
import { TicketNum } from "./TicketNum";

export default function Lottery() {
let [ticket,setticket]=useState([0,0,0])

let iswinning=sum(ticket)===15;
let buy= ()=>{
    setticket(genTicket(3))
}

    return (
        <>
        <h1>Lottery !</h1>
        <div className="ticket">
            <TicketNum num={1}/>
            <TicketNum num={2}/>
            <TicketNum num={3}/>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <button onClick={buy}>Buy New Ticket</button>

        <h3>{iswinning &&"Conguratation, YOU WIN!!" }</h3>
        </>
    )
}