import React from "react";

function Header() {
  return (
    <div style={styles.container}>
      <div className="container" style={{ flex: 1 }}>
        <div className="row h-100">
          <div className="col-md-6 h-100" style={styles.infoSection}>
            <h1 style={styles.title}>Great Offers</h1>
            <p style={styles.description}>
              On Waffle raffles you will find the best offers !
            </p>
          </div>
          <div className="col-md-6" style={styles.imgSection}>
            <img style={styles.img} src="/assets/presents.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: "url('/assets/red-bg.webp')",
    minHeight: "550px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
  },
  infoSection: {
    color: "#fff",
    display: "flex",
    flexDirection: "column" as any,
    justifyContent: "center",
  },
  imgSection: {
    display: "flex",
    flexDirection: "column" as any,
    justifyContent: "center",
  },
  title: {
    fontSize: "4em",
  },
  description: {
    fontSize: "1.6em",
  },
  img: {
    width: "100%",
  },
};

export default Header;
