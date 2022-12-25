import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserTickets from "../components/raffle/UserTickets";
import { fetchRaffle, fetchRaffleTickets } from "../helpers/api";
import { formatNumber } from "../helpers/helpers";
import {
  RaffleResponse,
  RaffleTicketsResponse,
} from "../interfaces/apiInterfaces";
import { IRaffleTickets } from "../interfaces/raffleInterfaces";

function Raffle() {
  const [userTickets, setUserTickets] = useState<IRaffleTickets[]>([]);
  const [tickets, setTickets] = useState<IRaffleTickets[]>([]);
  const [raffle, setRaffle] = useState<RaffleResponse>();
  let { id: raffleId } = useParams();

  function handleRemoveTicket(numberToDelete: number) {
    let tickets = [...userTickets];
    tickets = tickets.filter((number) => number.number !== numberToDelete);
    setUserTickets(tickets);
  }

  function formatResponseTickets(
    tickets: RaffleTicketsResponse[]
  ): IRaffleTickets[] {
    let formattedTickets: IRaffleTickets[] = [];
    formattedTickets = tickets.map((ticket) => {
      return {
        number: ticket.number,
        status: ticket.status,
        formatted: formatNumber(ticket.number),
      };
    });
    return formattedTickets;
  }

  async function getTickets() {
    if (raffleId) {
      const tickets: RaffleTicketsResponse[] = await fetchRaffleTickets(
        +raffleId,
        1,
        100
      );
      const formattedTickets = formatResponseTickets(tickets);
      setTickets(formattedTickets);
    }
  }

  async function getRaffleInfo() {
    if (!raffleId) return;
    const raffleData: RaffleResponse = await fetchRaffle(+raffleId);
    setRaffle(raffleData);
  }

  useEffect(() => {
    getTickets();
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

          <UserTickets
            removeNumber={handleRemoveTicket}
            numbers={userTickets}
          />
        </div>

        <div className="my-5 text-center">
          <h2 className="section-header mb-3">Grid</h2>
          <p className="m-0 p-0 mb-1">You can select * numbers</p>
          <p className="m-0 p-0 mb-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            voluptatem!
          </p>
          <hr className="my-4" />

          <div className="tickets-container">
            {tickets.map((ticket) => {
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

const styles = {
  tryophyImg: {
    width: "200px",
  },
};

export default Raffle;
