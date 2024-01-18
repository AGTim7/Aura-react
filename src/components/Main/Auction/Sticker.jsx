import React, {useState} from 'react'
import stickersData from './AuctionStikers-data'
import './AuctionCss/Sticker.css'

function Sticker(props){
  const index = props.index
  const onClick = props.onClick
  const stickersDataIndex = stickersData[index]
  const price = stickersDataIndex.price;
  const time = stickersDataIndex.time.split(':');

  return(
    <div className='auctions-other_stick' onClick={onClick}>
      <img className='auctions-other_stick__sticker' src={stickersDataIndex.image} />
      <div className='auctions-other_stick-info'>
        <div className='auctions-other_stick-info-profile'>
          <img className='auctions-other_stick-info-profile__avatar' src={stickersDataIndex.profile.avatar} alt="avatar" />
          <span className='auctions-other_stick-info-profile__nickname'>{stickersDataIndex.profile.nickname}</span>
        </div>
        <h5 className='auctions-other_stick-info__stickname'>{stickersDataIndex.stickname}</h5>
        <span className='auctions-other_stick-info__price'>{price} ETH</span>
        <div className='auctions-other_stick-info-time'>
          <div className='auctions-other_stick-info-time-el'>
            <span className='auctions-other_stick-info-time-el__num'>{time[0]}</span>
            <span className='auctions-other_stick-info-time-el__txt'>час</span>
          </div>
          <div className='auctions-other_stick-info-time-el'>
            <span className='auctions-other_stick-info-time-el__num'>{time[1]}</span>
            <span className='auctions-other_stick-info-time-el__txt'>мин</span>
          </div>
          <div className='auctions-other_stick-info-time-el'>
            <span className='auctions-other_stick-info-time-el__num'>{time[2]}</span>
            <span className='auctions-other_stick-info-time-el__txt'>сек</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sticker