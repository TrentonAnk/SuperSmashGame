import React from "react";
import "./FriendCard.css";

const FriendCard = props => {
  const { image, id, clickHandler } = props;
  
  
  return (
     <div className="card">
     <img className="image"
       src={image} alt={id}
        onClick={() => clickHandler(id)}
         />
        </div>
        
)};

export default FriendCard;
