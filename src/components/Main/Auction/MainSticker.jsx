import React from "react";
import Price from './Price'
import Time from './Time'
import stickersData from './AuctionStikers-data'
import './AuctionCss/MainSticker.css'
function MainSticker(props){
  const index = props.index
  const stickersDataIndex = stickersData[index]

  return(
    <div className="mainsticker">
      <img className='mainsticker-image' src={stickersDataIndex.image} />
        <div className="mainstiker-info">
          <div className='mainsticker-info-profile'>
            <img className='mainsticker-info-profile__avatar' src={stickersDataIndex.profile.avatar} alt="avatar" />
            <span className='mainsticker-info-profile__nickname'>{stickersDataIndex.profile.nickname}</span>
          </div>
          <h5 className='mainsticker-info__stickname'>{stickersDataIndex.stickname}</h5>
        <div className="mainsticker-info-components">
          <Price index={props.index}/>
          <Time index={props.index}/>
        </div>
        <button>Сделать ставку</button>
        </div>
    </div>
  )
}

export default MainSticker