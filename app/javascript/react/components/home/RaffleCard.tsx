import React from "react";
import { RaffleResponse } from "../../interfaces/api";

interface Props {
  raffle: RaffleResponse;
}

function RaffleCard({ raffle }: Props) {
  return (
    <div className="col-md-4 px-2 text-center my-2">
      <div className="bg-light rounded border p-4">
        <img
          style={styles.img}
          src="https://i.pinimg.com/originals/68/8e/45/688e4524c03c532cf821a8ca0935a6fe.jpg"
          alt=""
        />
        <h3 className="mb-3">{raffle.title}</h3>
        <button className="btn btn-primary btn-lg">Entrar</button>
      </div>
    </div>
  );
}

const styles = {
  img: {
    width: "200px",
    borderRadius: 100,
    marginBottom: "30px",
  },
};

export default RaffleCard;
