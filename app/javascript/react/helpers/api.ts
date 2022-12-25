import {
  RaffleResponse,
  RaffleTicketsResponse,
} from "../interfaces/apiInterfaces";

export async function fetchRaffles() {
  let res = await fetch("/api/raffles.json");
  res = await res.json();

  return res as unknown as RaffleResponse[];
}

export async function fetchRaffleTickets(
  raffleId: number,
  page: number | null = null,
  limit: number | null = null
) {
  let url = `/api/raffles/${raffleId}/tickets.json?`;
  if (page) url = url + `page=${page}`;
  if (limit) url = url + `&limit=${limit}`;
  let res = await fetch(url);
  res = await res.json();

  return res as unknown as RaffleTicketsResponse[];
}
