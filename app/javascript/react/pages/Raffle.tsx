import React, { useState } from "react";
import UserTickets from "../components/raffle/UserTickets";

function Raffle() {
  function handleRemoveTicket(numberToDelete: number) {
    let tickets = [...userTickets];
    tickets = tickets.filter((number) => number !== numberToDelete);
    setUserTickets(tickets);
  }
  const [userTickets, setUserTickets] = useState<number[]>([1, 2, 4]);

  return (
    <div className="min-height">
      <div className="container">
        <div className="section">
          <div className="text-center mb-5">
            <img
              style={styles.tryophyImg}
              src="/assets/trophy.png"
              alt="trophy"
            />
            <h2 className="section-header">Grab your tickets</h2>
          </div>

          <UserTickets
            removeNumber={handleRemoveTicket}
            numbers={userTickets}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  tryophyImg: {
    width: "200px",
  },
};

export default Raffle;
