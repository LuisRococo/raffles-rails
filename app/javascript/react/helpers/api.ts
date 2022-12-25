import { RaffleResponse } from "../interfaces/api";

export async function fetchRaffles() {
  let res = await fetch("/api/raffles.json");
  res = await res.json();

  return res as unknown as RaffleResponse[];
}
