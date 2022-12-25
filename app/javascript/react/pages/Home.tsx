import React, { useEffect, useState } from "react";
import Header from "../components/home/Header";
import Message from "../components/home/Message";
import RaffleCard from "../components/home/RaffleCard";
import { fetchRaffles } from "../helpers/api";
import { IRaffleResponse } from "../interfaces/apiInterfaces";

function Home() {
  const [raffles, setRaffles] = useState<IRaffleResponse[]>([]);

  async function getRaffles() {
    const raffles: IRaffleResponse[] = await fetchRaffles();
    setRaffles(raffles);
  }

  useEffect(() => {
    getRaffles();
  }, []);

  return (
    <div className="min-height">
      <Header />
      <Message />

      <div className="container section">
        <div>
          <h2 className="section-header">Raffles</h2>
          <hr className="section-hr" />
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          {raffles.map((raffle) => {
            return <RaffleCard key={raffle.id} raffle={raffle} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
