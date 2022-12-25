import React, { useState } from "react";
import useTicketGrid from "../../hooks/TicketGridHook";
import { IRaffleTickets } from "../../interfaces/raffleInterfaces";
import UserTickets from "./UserTickets";

interface Props {
  raffleId: number;
}

function TicketsContainer({ raffleId }: Props) {
  const gridFetchLimit = 200;
  const [userTickets, setUserTickets] = useState<IRaffleTickets[]>([]);
  const { page, gridTickets, next, previous } = useTicketGrid(
    raffleId,
    gridFetchLimit
  );

  function handleRemoveTicket(numberToDelete: number) {
    let tickets = [...userTickets];
    tickets = tickets.filter((number) => number.number !== numberToDelete);
    setUserTickets(tickets);
  }

  function changeGrid(advance: boolean) {
    if (advance) next();
    else previous();
  }

  return (
    <div>
      <div className="my-5 text-center">
        <h2 className="section-header mb-3">Grid</h2>
        <p className="m-0 p-0 mb-1">You can select * numbers</p>
        <p className="m-0 p-0 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
          voluptatem!
        </p>

        <UserTickets removeNumber={handleRemoveTicket} numbers={userTickets} />

        <div className="mt-4">
          <div className="d-flex justify-content-between mb-3">
            <div className="me-3 text-start">
              <p className="m-0 p-0">
                <strong>Page </strong>
                {page}
              </p>
              <p className="m-0 p-0 text-muted fst-italic">
                Showing <strong>{gridFetchLimit}</strong> tickets
              </p>
            </div>
            <div>
              <button
                onClick={() => changeGrid(false)}
                className="btn btn-primary btn-lg"
              >
                {"<"}
              </button>
              <button
                onClick={() => changeGrid(true)}
                className="btn btn-primary btn-lg ms-1"
              >
                {">"}
              </button>
            </div>
          </div>
          <div className="tickets-container">
            {gridTickets.length === 0 && (
              <div>
                <p className="m-0 p-0">
                  <strong>There are no tickets</strong>
                </p>
                <p className="m-0 p-0 text-muted fst-italic">
                  Try usign the pagination to return
                </p>
              </div>
            )}
            {gridTickets.map((ticket) => {
              return (
                <div key={ticket.number} className="ticket">
                  {ticket.formatted}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketsContainer;
