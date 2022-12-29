import React, { useState } from "react";
import useTicketGrid from "../../hooks/TicketGridHook";
import { IRaffleTickets } from "../../interfaces/raffleInterfaces";
import TicketActionNotification from "./ActionConfirmation";
import UserForm from "./UserForm";
import UserTickets from "./UserTickets";

interface Props {
  raffleId: number;
}

function TicketGrid({ raffleId }: Props) {
  const gridFetchLimit = 200;
  const [selectedTickets, setSelectedTickets] = useState<IRaffleTickets[]>([]);
  const [formVisiviliy, setFormVisivility] = useState(false);
  const [displayActionConfirmation, setDisplayActionConfirmation] =
    useState(false);
  const [actionConfAddStatus, setActionConfAddStatus] = useState(false);
  const { page, gridTickets, next, previous, fetchGrid } = useTicketGrid(
    raffleId,
    gridFetchLimit
  );

  function showActionConfirmation(addTicketAction: boolean) {
    setActionConfAddStatus(addTicketAction);
    setDisplayActionConfirmation(true);
  }

  function handleRemoveUserTicket(numberToDelete: number) {
    let tickets = [...selectedTickets];
    tickets = tickets.filter((number) => number.number !== numberToDelete);
    setSelectedTickets(tickets);
    showActionConfirmation(false);
  }

  function isTicketAlreadySelected(ticketToCheck: IRaffleTickets) {
    for (let i = 0; i < selectedTickets.length; i++) {
      const selectedTicket = selectedTickets[i];
      if (selectedTicket.number === ticketToCheck.number) return true;
    }
    return false;
  }

  function addUserTicket(numberToAdd: IRaffleTickets) {
    if (numberToAdd.status === 0) {
      showActionConfirmation(true);
      setSelectedTickets([...selectedTickets, numberToAdd]);
    }
  }

  function removeUserTicket(numberToRemove: IRaffleTickets) {
    setSelectedTickets(
      selectedTickets.filter((ticket) => {
        return ticket.number !== numberToRemove.number;
      })
    );
    showActionConfirmation(false);
  }

  function handleGridClick(event: any) {
    const clickedElement = event.target;
    if (!clickedElement.className.includes("ticket")) return;

    const formattedNumberString = clickedElement.textContent;
    const ticketData: IRaffleTickets | undefined = gridTickets.find(
      (element) => {
        return element.formatted === formattedNumberString;
      }
    );

    if (ticketData) {
      if (isTicketAlreadySelected(ticketData)) {
        removeUserTicket(ticketData);
      } else {
        addUserTicket(ticketData);
      }
    }
  }

  function changeGrid(advance: boolean) {
    if (advance) next();
    else previous();
  }

  function getTicketClass(ticket: IRaffleTickets) {
    let classes = "ticket avoid-selection";

    if (ticket.status !== 0) {
      classes += " ticket-owned";
    }

    if (isTicketAlreadySelected(ticket)) {
      classes += " ticket-selected";
    }

    return classes;
  }

  return (
    <div>
      <UserForm
        idRaffle={raffleId}
        numbers={selectedTickets}
        visible={formVisiviliy}
        onCloseBtnClick={() => {
          setFormVisivility(false);
        }}
        reloadGridTickets={() => {
          fetchGrid();
          setSelectedTickets([]);
          setFormVisivility(false);
        }}
      />
      <TicketActionNotification
        isTicketAdded={actionConfAddStatus}
        componentVisible={displayActionConfirmation}
        turnOffVisibility={() => setDisplayActionConfirmation(false)}
      />
      <div className="my-5 text-center">
        <h2 className="section-header mb-3">Grid</h2>
        <p className="m-0 p-0 mb-1">You can select * numbers</p>
        <p className="m-0 p-0 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
          voluptatem!
        </p>

        <UserTickets
          removeNumber={handleRemoveUserTicket}
          numbers={selectedTickets}
          onClickSubmit={() => {
            setFormVisivility(true);
          }}
        />

        <div className="mt-4">
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
          <div className="tickets-container" onClick={handleGridClick}>
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
                <div className="ticket-wrapper" key={ticket.number}>
                  <div className="ticket-cover"></div>
                  <div className={getTicketClass(ticket)}>
                    {ticket.formatted}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketGrid;
