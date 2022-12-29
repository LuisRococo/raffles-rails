import React, { useEffect, useState } from "react";

interface Props {
  componentVisible: boolean;
  isTicketAdded: boolean;
  turnOffVisibility: () => void;
}

function TicketActionNotification({
  componentVisible,
  isTicketAdded,
  turnOffVisibility,
}: Props) {
  const [timeOutToHide, setTimeOutToHide] = useState<any>(null);

  function getImage() {
    return isTicketAdded ? "/assets/paloma.png" : "/assets/cross.png";
  }

  function getMessage() {
    return isTicketAdded ? "Added" : "Removed";
  }

  useEffect(() => {
    if (componentVisible) {
      if (timeOutToHide) {
        clearTimeout(timeOutToHide);
        setTimeOutToHide(null);
      }

      setTimeOutToHide(
        setTimeout(() => {
          turnOffVisibility();
        }, 1500)
      );
    }
  }, [componentVisible, isTicketAdded]);

  return (
    <>
      {componentVisible && (
        <div style={styles.container}>
          <div style={styles.card}>
            <img style={styles.img} src={getImage()} alt="" />
            <p style={styles.text}>
              <strong>{getMessage()}</strong>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  container: {
    position: "fixed" as any,
    top: 0,
    left: 0,
    width: "100vw",
    display: "flex" as any,
    justifyContent: "center" as any,
    zIndex: 5,
  },
  card: {
    width: "180px",
    height: "210px",
    backgroundColor: "#ededed",
    marginTop: "30px",
    borderRadius: "10px",
    padding: "25px 20px",
    textAlign: "center" as any,
    display: "flex" as any,
    flexDirection: "column" as any,
    justifyContent: "space-between" as any,
    alignItems: "center" as any,
  },
  img: {
    width: "85%",
  },
  text: {
    fontSize: "1.6em",
    color: "363434",
    margin: "0",
    padding: "0",
    marginTop: "10px",
  },
};

export default TicketActionNotification;
