import  TicketNum  from "./TicketNum";
export default function Ticket({ticket}){
    return(
        <div>
           {ticket.map((num,idx)=>{
            <TicketNum num={num}/>
           })}
        </div>
    )
}