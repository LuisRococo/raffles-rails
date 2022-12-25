import React from "react";
import { formatNumber } from "../../helpers/helpers";
import { IRaffleTickets } from "../../interfaces/raffleInterfaces";

interface Props {
  number: IRaffleTickets;
  onClick: (numberClicked: number) => void;
}

function UserTicket({ number, onClick }: Props) {
  return (
    <div
      className="user-ticket-btn avoid-selection"
      onClick={() => onClick(number.number)}
    >
      {formatNumber(number.number)}
    </div>
  );
}

export default UserTicket;
