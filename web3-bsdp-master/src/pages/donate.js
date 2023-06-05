import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useAuth } from "../context/authprovider";
import "./donate.css";
const Donate = (props) => {
  const channel = useLocation();
  const auth = useAuth();
  const [inputs, setInputs] = useState({});
  const [disabled, setDisabled] = useState(false);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `${inputs.username} 贊助了 ${inputs.channelname} ${inputs.amount}元！ \n訊息： ${inputs.message}`
    );
  };
  useEffect(() => {
    if (channel.state) {
      setInputs(value =>({ ...value,channelname: channel.state }));
      setDisabled(true);
    }
  }, [channel.state]);
  useEffect(() => {
    if (auth.user) {
      setInputs(value =>({ ...value, username: auth.user }));
    }
  }, [auth.user]);

  return (
    <div>
      <h1>贊助</h1>
      <form onSubmit={handleSubmit}>
        <label>
          贊助對象
          <input
            type="text"
            name="channelname"
            value={inputs.channelname ?? ''}
            onChange={handleChange}
            disabled={disabled}
          />
        </label>
        <label>
          你的暱稱
          <input
            type="text"
            name="username"
            required="required"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          贊助金額
          <input
            type="number"
            name="amount"
            required="required"
            value={inputs.amount || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          訊息
          <textarea
            type="text"
            name="message"
            value={inputs.message || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Donate;
