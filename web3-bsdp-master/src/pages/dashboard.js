import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../context/authprovider";
import { ethers } from "ethers";

const Dashboard = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.Logout();
    navigate("/");
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  const connectWallet = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChanged([result[0]]);
        });
    } else {
      setErrorMessage("Please install MetaMask");
    }
  };
  const accountChanged = (accountName) => {
    setDefaultAccount(accountName);
    getUserBalance(accountName);
  };
  const getUserBalance = (accountAddress) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [String(accountAddress), "latest"],
      })
      .then((balance) => {
        setUserBalance(ethers.formatEther(balance));
        setErrorMessage(null);
      })
      .catch((err) => setErrorMessage(err.message));
  };
  return (
    <div>
      <h1>儀表板</h1>
      <h3>歡迎，{auth.user}</h3>
      <button onClick={handleLogout}>登出</button>
      <div>
        <h3>Address: {defaultAccount}</h3>
        <h3>Balance: {userBalance}</h3>
        <button onClick={connectWallet}>連結MetaMask錢包</button>
        {errorMessage}
      </div>
    </div>
  );
};

export default Dashboard;
