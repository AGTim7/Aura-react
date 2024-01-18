import React from "react";
import stickersData from "./AuctionStikers-data";
import './AuctionCss/Price.css'

function Price(props){
  const index = props.index;
  const stickersDataIndex = stickersData[index];

  return(
    <div className="price">
      <span className="price-text">Ставка</span>
      <span className="price-eth">{stickersDataIndex.price}ETH</span>
      <span className="price-dollar">${Math.round(stickersDataIndex.price * 226861) / 100}</span>
    </div>

  )
}

export default Price