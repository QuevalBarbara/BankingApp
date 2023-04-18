import React, {useContext}from "react";
import Layout from "../components/Layout";
import UserContext from "../components/UserContext";

const AllData = () => {
  const msg = useContext(UserContext)
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <Layout>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-center">All Data</h4>
                <p>Name : {user.name}</p>
                <p>Email : {user.email}</p>
                <p>Password : {user.password}</p>
                <p>Balance : {user.balance}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AllData