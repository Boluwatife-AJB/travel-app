import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Card(props) {
  // console.log(props);
  return (
    <div className="card">
      <div className="card--content">
        <img
          src={require(`../Images/${props.item.coverImg}`)}
          alt="img"
          className="card--content--image"
        />
        <div className="card--content--details">
          <div className="card--content--details_top">
            <p>
              <FontAwesomeIcon
                icon={faLocationDot}
                className="card--content--details_icon"
              ></FontAwesomeIcon>{' '}
              {props.item.location}
            </p>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h2>{props.item.title}</h2>
          <h5>
            {props.item.startDate} - {props.item.endDate}
          </h5>
          <p>{props.item.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Card;
