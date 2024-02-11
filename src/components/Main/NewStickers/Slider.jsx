import React, {useState} from 'react'
import NewStickersPack from '../../../components/Main/NewStickers/NewStickersPack-data.js'
import './NewStickersCss/Slider.css'

function Slider(){
  let buttons = [];
  const [focusButton, setFocusButton] = useState(0)
  for(let i = 0; i < 4; i++){
    buttons.push(<li className='new-stickers__button' key={i} onClick={
      ()=>{setFocusButton(i)}
    }>{i+1}</li>);
  }
  const list = NewStickersPack[focusButton].map(item=>{
    return (<img className='new-stickers__sticker' src={item}/>)
  })
  return(
      <div>
        <div className='new-stickers-sticks'>{list}</div>
        <ul className='new-stickers__buttons'>
          {buttons}
        </ul>
      </div>
  )
}

export default Slider