import React from "react";
import Header from "../components/home/Header";
import Message from "../components/home/Message";
import RaffleCard from "../components/home/RaffleCard";

function Home() {
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
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
