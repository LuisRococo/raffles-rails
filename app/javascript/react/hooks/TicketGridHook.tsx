import React, { useEffect, useState } from "react";
import { fetchRaffleTickets } from "../helpers/api";
import { formatNumber } from "../helpers/helpers";
import { IRaffleTicketsResponse } from "../interfaces/apiInterfaces";
import { IRaffleTickets } from "../interfaces/raffleInterfaces";

function useTicketGrid(raffleId: number, limit: number) {
  const [gridTickets, setTickets] = useState<IRaffleTickets[]>([]);
  const [page, setPage] = useState(1);

  function formatResponseTickets(
    tickets: IRaffleTicketsResponse[]
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

  async function getGridTickets() {
    const tickets: IRaffleTicketsResponse[] = await fetchRaffleTickets(
      +raffleId,
      page,
      limit
    );
    const formattedTickets = formatResponseTickets(tickets);
    setTickets(formattedTickets);
  }

  async function next() {
    setPage(page + 1);
  }

  async function previous() {
    const newPage = page - 1;
    if (newPage >= 1) {
      setPage(newPage);
    }
  }

  useEffect(() => {
    getGridTickets();
  }, []);

  useEffect(() => {
    getGridTickets();
  }, [page]);

  return { gridTickets, next, previous, page };
}

export default useTicketGrid;
