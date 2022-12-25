import React from "react";
import { formatNumber } from "../../helpers/helpers";

interface Props {
  number: number;
  onClick: (numberClicked: number) => void;
}

function UserTicket({ number, onClick }: Props) {
  return (
    <div className="user-ticket-btn" onClick={() => onClick(number)}>
      {formatNumber(number)}
    </div>
  );
}

export default UserTicket;
