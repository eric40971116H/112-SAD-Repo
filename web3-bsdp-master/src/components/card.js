import React from "react";
import PropTypes from "prop-types";
import "./card.css";
import {Link} from 'react-router-dom';
const Card = (props) => {
  return (
    <article
      className="card"
      style={{ width: props.carWidth ? props.carWidth : "300px" }}
    >
      <div
        className="card-image"
        style={{ height: props.imageHeight ? props.imageHeight : "300px" }}
      >
        <img alt="" src={`${props.imageUrl}`}  />
      </div>

      <div className="card-content">
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </div>
      <div className="card-links">
        <Link to='/About'><button>實況連結</button></Link>
        <Link to='/Donate' state={props.title}><button>點我贊助</button></Link>
      </div>
    </article>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.object.isRequired,
  carWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  title: PropTypes.object.isRequired,
  body: PropTypes.object.isRequired
};

export default Card;