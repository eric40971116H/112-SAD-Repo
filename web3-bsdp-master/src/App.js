import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Title from "./components/title";
import Home from "./pages/home";
import About from "./pages/about";
import Channels from "./pages/channels";
import Donate from "./pages/donate";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Sidebarmenu from "./components/Sidebarmenu";
import Register from "./pages/register";
import { RequireAuth } from "./components/RequireAuth";

function App() {
  return (
    <div className="App" id="outer-container">
      <Router basename="/">
        <Sidebarmenu
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <div id="page-wrap">
          <Title />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Channels" element={<Channels />} />
            <Route path="/Donate" element={<Donate />} />
            <Route
              path="/Dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
