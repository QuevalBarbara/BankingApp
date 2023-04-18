import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";


const Deposit = () => {
  if(localStorage.getItem("currentUser") === null) {
    return (
      <div className="container">
        <h2 className="text-center mt-5 mb-3">Error: Please create an account before trying to make a deposit.</h2>
      </div>
    )
  }
  else {
    /* eslint-disable */
    const currentUser = localStorage.getItem("currentUser");
    var user = JSON.parse(localStorage.getItem(currentUser));
    var [depositAmount, setDepositAmount] = useState("");
    var [displayedBalance, setBalance] = useState(user.balance);
    var balance = user.balance
    var [successMessage, setSuccessMessage] = useState("");
    var [errorMessage, setErrorMessage] = useState("");
    /* eslint-enable */
    
    const handleDeposit = () => {
      // Input validation
      if (depositAmount === "") {
        setErrorMessage("Please enter a deposit amount.");
      } else if (isNaN(depositAmount)) {
        setErrorMessage("Please enter a valid number.");
      } else if (parseFloat(depositAmount) <= 0) {
        setErrorMessage("Deposit amount must be greater than 0.");
      } else {
        // Process deposit
        const newBalance = balance + parseFloat(depositAmount);
        setBalance(newBalance);
        balance = newBalance;
        var name = user.name
        var email = user.email
        var password = user.password
        localStorage.setItem(currentUser, JSON.stringify({name, email, password, balance}));
        setSuccessMessage(`Deposit of $${depositAmount} received successfully.`);
        setDepositAmount("");
        setErrorMessage("");
      }
    };

    return (
    <Layout>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title text-center">Deposit Form</h4>
                  {successMessage && (
                    <div className="alert alert-success" role="alert">
                      {successMessage}
                    </div>
                  )}
                  {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                      {errorMessage}
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="balance">Balance</label>
                    <input
                      type="text"
                      className="form-control"
                      id="balance"
                      value={`$${displayedBalance}`}
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="depositAmount">Deposit Amount</label>
                    <input
                      type="number"
                      className="form-control"
                      id="depositAmount"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleDeposit}
                    disabled={!depositAmount}
                  >
                    Deposit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Layout>  
    );
  };
};
export default Deposit;