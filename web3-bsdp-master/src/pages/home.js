import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div>
      <h1>主頁</h1>
      <div className="links">
        <Link to="/Login">
          <button className="linkbtn">
            實況主登入
            <AiOutlineArrowRight />
          </button>
        </Link>
        <Link to="/Channels">
          <button className="linkbtn">
            瀏覽頻道
            <AiOutlineArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
