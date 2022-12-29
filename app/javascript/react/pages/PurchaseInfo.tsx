import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { formatNumber } from "../helpers/helpers";
import { routes } from "../routes";

export interface IPurchaseInfoRouteParams {
  folioNumber: number;
  tickets: number[];
  raffleTitle: string;
  raffleId: number;
  name: string;
}

function PurchaseInfo() {
  const state: IPurchaseInfoRouteParams = useLocation().state;

  if (!state) {
    return <Navigate to={routes.home} />;
  }

  return (
    <div className="min-height py-5">
      <div className="text-center">
        <h1 className="mb-4">Tickets taken !!!</h1>

        <div className="bg-success py-3 text-white mb-4">
          <h3 className="p-0 m-0 mb-2">Congratulations</h3>
          <p className="p-0 m-0">{state.name}</p>
        </div>

        <p style={styles.info}>
          <strong>Raffle:</strong> {state.raffleTitle}
        </p>
        <p style={styles.info}>
          <strong>Folio:</strong> {state.folioNumber}
        </p>

        <p className="m-0 p-0 mb-1 mt-3">
          <strong>Tickets</strong>
        </p>
        <div className="d-flex justify-content-center flex-wrap">
          {state.tickets.map((ticket) => {
            return (
              <div key={ticket} style={styles.ticket}>
                {formatNumber(ticket)}
              </div>
            );
          })}
        </div>
      </div>

      <hr className="section-hr my-4" />

      <div className="text-center">
        <h2>Receipt</h2>
        <p>One last step, pay your tickets</p>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-7">
              <img
                style={styles.img}
                src="https://via.placeholder.com/900x1500"
                alt="receipt"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  ticket: {
    padding: "7px 10px",
    margin: "3px",
    backgroundColor: "#d9dbd9",
    color: "rgb(95, 94, 94)",
    fontSize: "1em",
    borderRadius: "10px",
    minWidth: "70px",
    textAlign: "center" as any,
  },
  img: {
    width: "100%",
  },
  info: {
    margin: 0,
    padding: 0,
  },
};

export default PurchaseInfo;
