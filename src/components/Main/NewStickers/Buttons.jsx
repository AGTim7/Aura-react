import React, {useState} from 'react'
import './NewStickersCss/Buttons.css'

function Buttons(){
  let buttons = [];
  const [focusButton, setFocusButton] = useState(0)
  for(let i = 0; i < 4; i++){
    buttons.push(<li className='new-stickers__button' key={i} onClick={
      ()=>{setFocusButton(i)}
    }>{i}</li>);
  }
  return(
      <ul className='new-stickers__buttons'>
        {buttons}
      </ul>
  )
}

export default Buttons