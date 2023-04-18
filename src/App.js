import React, {useState, useMemo }from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CreateAccount from"./pages/CreateAccount";
import AllData from "./pages/AllData";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import NotFound from "./components/NotFound";
import UserContext from "./components/UserContext";

function App() {
  const [user, setUser] = useState(null);
  const value = useMemo (() => ([user, setUser]), [user, setUser]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <UserContext.Provider value={"hello"}>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/CreateAccount" element={<CreateAccount/>}></Route>
            <Route path="/Deposit" element={<Deposit/>}></Route>
            <Route path="/Withdraw" element={<Withdraw/>}></Route>
            <Route path="/AllData" element={<AllData/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </UserContext.Provider>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;