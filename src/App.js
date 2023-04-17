import React from "react";
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


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/CreateAccount" element={<CreateAccount/>}></Route>
          <Route path="/Deposit" element={<Deposit/>}></Route>
          <Route path="/Withdraw" element={<Withdraw/>}></Route>
          <Route path="/AllData" element={<AllData/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;