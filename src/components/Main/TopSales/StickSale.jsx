import React from 'react';
import products from './Products-data.js'
import './StickSale.css'

function StickSale(props){

  const index = props.index;
  const stickIndex = products[index];
  const price = stickIndex.price;
  return(
    <div className='stick-sale'>
      <img className='stick-sale-image' src={stickIndex.image} alt="stick" />
      <div className='stick-sale-info'>
        <div className='stick-sale-info-profile'>
          <img className='stick-sale-info-profile__avatar' src={stickIndex.profile.avatar} alt="avatar" />
          <span className='stick-sale-info-profile__nickname'>{stickIndex.profile.nickname}</span>
        </div>
        <h3 className='stick-sale-info__stickname'>{stickIndex.stickname}</h3>
        <span className='stick-sale-info-price'>{price.toFixed(2)} ETH <span className='stick-sale-info-price__dollar'>(${Math.round(price * 226861) / 100})</span></span>
      </div>
    </div>
  )
}

export default StickSale