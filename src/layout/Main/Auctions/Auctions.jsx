import React, {useState} from 'react'
import Sticker from '../../../components/Main/Auction/Sticker'
import MainSticker from '../../../components/Main/Auction/MainSticker'
import stickersData from '../../../components/Main/Auction/AuctionStikers-data'
import './Auctions.css'
function Auctions(){
  let stickList = [];
  const [stickIndex, setStickIndex] = useState('stick1')
    for(let key of Object.keys(stickersData)){
      stickList.push(<Sticker index={key} onClick={()=>{
        setStickIndex(key)
      }}/>)
      
    }

    return(
      <div className='container'>
      <div className='auctions-top'>
        <h2 className='auctions-top__h2'>Аукцион</h2>
        <div className='auctions-top-live'>
          <div className='auctions-top-live__circle'></div>
          <span className='auctions-top-live__text'>Live auction</span>
        </div>
      </div>
      <MainSticker index={stickIndex}/>
      <ul className='auctions-other_sticks'>{stickList}</ul>
      </div>
      )
  }


export default Auctions