import React, { useState } from "react";
import Layout from "../components/Layout";
import UserContext from "../components/UserContext";

const CreateAccount = () => {
  var users = new Map()
  for (var i = 0; i < localStorage.length; i++){
    users.set(i,localStorage.getItem(localStorage.key(i)));
  }
  // const user = JSON.parse(localStorage.getItem('user'));
  // const users = JSON.parse(localStorage.);
  // const userName = user ? user.name : "";
  // const userEmail = user ? user.email : "";
  // const userPassword = user ? user.password : "";


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const balance = 0;
  const [success, setSuccess] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      alert("Please enter your name.");
    } else if (!email) {
      alert("Please enter your email address.");
    } else if (!password) {
      alert("Please enter your password.");
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
    } else {
      localStorage.setItem(name, JSON.stringify({name, email, password, balance}));
      setSuccess(true);
    }
  };

  const handleAddAnotherAccount = () => {
    setName("");
    setEmail("");
    setPassword("");
    setSuccess(false);
    // localStorage.removeItem('user');
  };

console.log("Users:", users)

// for (var i = 0; i < users.length; i++){
//   const value = users.getItem(users.key(i))
//   console.log(value);
//   console.log("Name:", value.name);
//   console.log("Email:", value.email);
//   console.log("Password:", value.password);
//   console.log("Balance:", value.balance);
// }
// for (const [key, value] of Object.entries(users)) {
//   console.log(key, value);
//   console.log("Name:", value.name);
//   console.log("Email:", value.email);
//   console.log("Password:", value.password);
//   console.log("Balance:", value.balance);
// }  

// console.log("Name:", user.name);
// console.log("Email:", user.email);
// console.log("Password:", user.password);
// console.log("Balance:", user.balance);

  return (
    <Layout>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                {success ? (
                  <>
                    <h3 className="card-title">Account created successfully!</h3>
                    <button
                      className="btn btn-primary mt-3"
                      onClick={handleAddAnotherAccount}
                    >
                      Add Another Account
                    </button>
                  </>
                ) : (
                  <>
                    <h4 className="card-title text-center">Create Account</h4>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="nameInput">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="nameInput"
                          placeholder="Name"
                          value={name}
                          onChange={handleNameChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="emailInput">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="emailInput"
                          placeholder="Email"
                          value={email}
                          onChange={handleEmailChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="passwordInput"
                          placeholder="Password"
                          value={password}
                          onChange={handlePasswordChange}
                        />
                      </div>
                      {(!name || !email || !password || password.length < 8) && (
                        <div className="alert alert-danger">
                          Please fill out all fields and ensure the password is at least 8 characters long.
                        </div>
                      )}
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={!name || !email || !password || password.length < 8}
                      >
                        Create Account
                      </button>
                      
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateAccount;