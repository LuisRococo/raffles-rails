import React, { useState } from "react";
import { IRaffleTickets } from "../../interfaces/raffleInterfaces";

interface Props {
  idRaffle: number;
  numbers: IRaffleTickets[];
  visible: boolean;
  onCloseBtnClick: () => void;
}

function UserForm({
  idRaffle,
  numbers,
  onCloseBtnClick,
  visible = false,
}: Props) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    cellphone: "",
    state: "",
  });

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    const data: any = { ...userData };
    data[name] = value;
    setUserData(data);
  }

  return (
    <>
      {visible && (
        <div style={styles.darkenWrapper}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-7">
                <div className="card">
                  <div className="card-body">
                    <h4 className="text-center">Add your info</h4>
                    <p className="text-center pb-0 mb-1">Your tickets</p>
                    <div className="d-flex justify-content-center flex-wrap">
                      {numbers.map((number) => {
                        return (
                          <div key={number.number} style={styles.ticket}>
                            {number.formatted}
                          </div>
                        );
                      })}
                    </div>

                    <hr />

                    <form action="">
                      <div className="container">
                        <div className="row">
                          <div className="mb-3 col-md-6">
                            <label className="form-label">First Name</label>
                            <input
                              type="text"
                              value={userData.firstName}
                              className="form-control"
                              name="firstName"
                              onChange={handleInput}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label className="form-label">Last Name</label>
                            <input
                              type="text"
                              value={userData.lastName}
                              className="form-control"
                              name="lastName"
                              onChange={handleInput}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label className="form-label">Cellphone</label>
                            <input
                              type="text"
                              value={userData.cellphone}
                              className="form-control"
                              name="cellphone"
                              onChange={handleInput}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label className="form-label">State</label>
                            <input
                              type="text"
                              value={userData.state}
                              className="form-control"
                              name="state"
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end align-items-center">
                        <a
                          style={{
                            cursor: "pointer" as any,
                            textDecoration: "none" as any,
                          }}
                          onClick={onCloseBtnClick}
                          className="me-3"
                        >
                          Close
                        </a>
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  darkenWrapper: {
    position: "fixed" as any,
    top: 0,
    left: 0,
    zIndex: 10,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(84, 84, 84, 0.43)",
  },
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
};

export default UserForm;
