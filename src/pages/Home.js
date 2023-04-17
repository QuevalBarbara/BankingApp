import React from "react";
import logo from "../bank.png";


const Home = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body text-center">
                <h4 className="card-header">Welcome to Bad Bank!</h4>
                <div className="card-body">
                  <h6 className="card-text">You can move around using the navigation bar above.</h6>
                </div>
                <img src={logo} className="card-img-top img-center" alt="" style={{ width: "18rem" }} />
                <div>
                  <p className="card-text">MITxPro exercise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;