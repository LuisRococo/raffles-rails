import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserTickets from "../components/raffle/UserTickets";
import { fetchRaffle } from "../helpers/api";
import useTicketGrid from "../hooks/TicketGridHook";
import { RaffleResponse } from "../interfaces/apiInterfaces";
import { IRaffleTickets } from "../interfaces/raffleInterfaces";

function Raffle() {
  const gridFetchLimit = 200;
  const [userTickets, setUserTickets] = useState<IRaffleTickets[]>([]);
  const [raffle, setRaffle] = useState<RaffleResponse>();
  let { id: raffleId } = useParams();
  if (!raffleId) raffleId = "";
  const { page, gridTickets, next, previous } = useTicketGrid(
    +raffleId,
    gridFetchLimit
  );

  function handleRemoveTicket(numberToDelete: number) {
    let tickets = [...userTickets];
    tickets = tickets.filter((number) => number.number !== numberToDelete);
    setUserTickets(tickets);
  }

  async function getRaffleInfo() {
    if (!raffleId) return;
    const raffleData: RaffleResponse = await fetchRaffle(+raffleId);
    setRaffle(raffleData);
  }

  function changeGrid(advance: boolean) {
    if (advance) next();
    else previous();
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

          <div>
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
    </div>
  );
}

const styles = {
  tryophyImg: {
    width: "200px",
  },
};

export default Raffle;
