import React from "react";
import { IRaffleTickets } from "../../interfaces/raffleInterfaces";
import UserTicket from "./UserTicket";

interface Props {
  numbers: IRaffleTickets[];
  removeNumber: (number: number) => void;
}

function UserTickets({ numbers, removeNumber }: Props) {
  function handleTicketClick(number: number) {
    removeNumber(number);
  }

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 bg-light rounded border p-4">
          <p className="text-center h5 m-0 mb-2 p-0">Your tickets</p>
          <p className="text-center m-0 p-0">
            You can remove a ticket by clicking on it
          </p>
          <hr />
          <div className="d-flex flex-wrap justify-content-center">
            {numbers.length === 0 && (
              <p className="fst-italic text-center text-muted">
                You have not selected any tickets yet
              </p>
            )}

            {numbers.map((number) => {
              return <UserTicket number={number} onClick={handleTicketClick} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserTickets;
