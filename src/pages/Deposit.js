import React, { useState } from "react";
import Layout from "../components/Layout";

const Deposit = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [depositAmount, setDepositAmount] = useState("");
  const [balance, setBalance] = useState(user.balance);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
                    value={`$${balance}`}
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

export default Deposit;