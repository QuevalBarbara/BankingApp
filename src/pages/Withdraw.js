import React, { useState } from "react";

const Withdraw = () => {
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [balance, setBalance] = useState(1000); // initial balance amount
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleWithdraw = () => {
    // Input validation
    if (withdrawAmount === "") {
      setErrorMessage("Please enter a withdrawal amount.");
    } else if (isNaN(withdrawAmount)) {
      setErrorMessage("Please enter a valid number.");
    } else if (parseFloat(withdrawAmount) > balance) {
      setErrorMessage("Withdrawal amount exceeds account balance.");
    } else {
      // Process withdrawal
      const newBalance = balance - parseFloat(withdrawAmount);
      setBalance(newBalance);
      setSuccessMessage(`Withdrawal of $${withdrawAmount} processed successfully.`);
      setWithdrawAmount("");
      setErrorMessage("");
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-center">Withdraw</h4>
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
                  <label htmlFor="withdrawAmount">Withdraw Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    id="withdrawAmount"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleWithdraw}
                  disabled={!withdrawAmount}
                >
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdraw;