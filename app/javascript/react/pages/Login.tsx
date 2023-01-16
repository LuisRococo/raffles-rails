import React from "react";

function Login() {
  return (
    <div style={styles.background}>
      <div className="min-height">
        <div className="container">
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h4 className="my-2">Login</h4>
                </div>
                <div className="card-body">
                  <form action="" method="post">
                    <label>Username: </label>
                    <input type="text" className="form-control mb-3" />
                    <label>Password: </label>
                    <input type="password" className="form-control mb-3" />

                    <input
                      className="btn btn-md btn-primary w-100 mt-4"
                      type="button"
                      value="Submit"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  background: {
    backgroundImage: "url('assets/gray-bg.svg')",
    overflow: "auto",
  },
};

export default Login;
