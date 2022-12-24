import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container text-white py-5">
        <div className="d-flex align-items-center flex-column">
          <div style={styles.logoCont}>
            <img style={styles.logo} src="/assets/logo.webp" alt="" />
            <p className="m-0 p-0">Raffle Waffles</p>
          </div>
          <p className="m-0 p-0">The best Raffles and waffles !</p>
        </div>
        <hr className="my-5 p-0" />
        <p className="text-center">@ 2022</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#272927",
    overflow: "hidden",
  },
  logoCont: {
    display: "flex",
    alignContent: "center",
  },
  logo: {
    width: "40px",
    marginRight: "5px",
  },
};

export default Footer;
