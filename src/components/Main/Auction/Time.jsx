import React from "react";
import stickersData from "./AuctionStikers-data";
import './AuctionCss/Time.css'

function Time(props){
  const index = props.index;
  const stickersDataIndex = stickersData[index];
  const time = stickersDataIndex.time.split(':');
  return(
    <div className="time">
      <div className="time-flex">
        <span className="time-text">Окончание через:</span>
        <div className="time-body">
          <div className="time-body-el">
            <span className="time-body-el__num">{time[0]}</span>
            <span className="time-body-el__txt">Час</span>
          </div>
          <div className="time-body-el">
            <span className="time-body-el__num">{time[1]}</span>
            <span className="time-body-el__txt">Мин</span>
          </div>
          <div className="time-body-el">
            <span className="time-body-el__num">{time[2]}</span>
            <span className="time-body-el__txt">Сек</span>
          </div>
        </div>
      </div>
      <img className="time-image" src="../images/auctions/clock.svg" alt="clock" />
    </div>

  )
}

export default Time