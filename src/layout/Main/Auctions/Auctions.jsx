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
  const [visionStickers, setVisionStickers] = useState(stickList.slice(0,8))

  const [buttonCondition, setButtonCondition] = useState('Другие аукционы')
  function handleClick(){
    if(buttonCondition == 'Другие аукционы'){
    setVisionStickers(stickList.slice(0,40));
    setButtonCondition('Скрыть');
    }else{
      setVisionStickers(stickList.slice(0,8));
      setButtonCondition('Другие аукционы');
    }
  }

    return(
      <div className='auctions container'>
      <div className='auctions-top'>
        <h2 className='auctions-top__h2'>Аукцион</h2>
        <div className='auctions-top-live'>
          <div className='auctions-top-live__circle'></div>
          <span className='auctions-top-live__text'>Live auction</span>
        </div>
      </div>
      <MainSticker index={stickIndex}/>
      <h3 className='auction-more__text'>Другие аукционы</h3>
      <div className='auctions-other'>
        <ul className='auctions-other_sticks'>{visionStickers}</ul>
        <button onClick={handleClick} className='auctions-other__button'>{buttonCondition}</button>
      </div>
      </div>
      )
  }


export default Auctions