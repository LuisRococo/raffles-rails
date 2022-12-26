import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TicketGrid from "../components/raffle/TicketGrid";
import UserForm from "../components/raffle/UserForm";
import UserTickets from "../components/raffle/UserTickets";
import { fetchRaffle } from "../helpers/api";
import useTicketGrid from "../hooks/TicketGridHook";
import { IRaffleResponse } from "../interfaces/apiInterfaces";
import { IRaffleTickets } from "../interfaces/raffleInterfaces";

function Raffle() {
  const [raffle, setRaffle] = useState<IRaffleResponse>();
  let { id: raffleId } = useParams();

  async function getRaffleInfo() {
    if (!raffleId) return;
    const raffleData: IRaffleResponse = await fetchRaffle(+raffleId);
    setRaffle(raffleData);
  }

  useEffect(() => {
    getRaffleInfo();
  }, []);

  return (
    <div className="min-height">
      <div className="container">
        <div className="my-5">
          <div className="text-center mb-5">
            <img
              style={styles.tryophyImg}
              src="/assets/trophy.png"
              alt="trophy"
            />
            <h2 className="section-header mb-2">Grab your tickets</h2>
            <p className="h5">{raffle?.title}</p>
          </div>
        </div>

        <hr className="section-hr" />

        {raffle && <TicketGrid raffleId={raffle?.id} />}
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
