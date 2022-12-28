import {
  IRaffleResponse,
  IRaffleTicketsResponse,
  IUserFormInfo,
  IBasicResponse,
} from "../interfaces/apiInterfaces";

export async function fetchRaffles() {
  let res = await fetch("/api/raffles.json");
  res = await res.json();

  return res as unknown as IRaffleResponse[];
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

  return res as unknown as IRaffleTicketsResponse[];
}

export async function fetchRaffle(raffleId: number) {
  let res: any = await fetch(`/api/raffles/${raffleId}`);
  res = await res.json();

  res = res.raffle as unknown as IRaffleResponse;
  return res;
}

export async function postTakeTickets(
  raffleId: number,
  tickets: number[],
  userInfo: IUserFormInfo
) {
  const data = {
    tickets,
    userInfo,
  };

  let res: any = await fetch(`/api/raffles/${raffleId}/take-tickets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });

  res = await res.json();
  return res as IBasicResponse;
}
