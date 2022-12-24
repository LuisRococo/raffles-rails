import React from "react";

function Message() {
  return (
    <div className="py-4" style={styles.container}>
      <div className="container">
        <div style={styles.dataContainer}>
          <img style={styles.img} src="/assets/celebration.png" alt="" />
          <div>
            <p style={styles.text}>Great Raffles are comming !!!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#c91a23",
    color: "#fff",
    textAlign: "center" as any,
  },
  dataContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "100px",
    marginRight: "10px",
  },
  text: {
    fontSize: "1.4em",
    margin: 0,
    padding: 0,
  },
};

export default Message;
