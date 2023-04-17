import React from "react";
import useFetch from "../hooks/useFetch";
import NotFound from "../components/NotFound";

const AllData = () => {
  const { loading, error, data } = useFetch('http://localhost:1337/User')

  if (loading) return (
                <div className="container mt-5">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title text-center">All Data</h4>
                        <p className="card-text">Loading...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  )
  if (error) return <NotFound/>

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-center">All Data</h4>
                <p className="card-text">
                  {data.map(User => (
                    <p className="card-text" key={User.username}>Name</p>
                  )
                    )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllData