import React, {useState} from 'react'
import NewStickersPack from '../../../components/Main/NewStickers/NewStickersPack-data.js'
import Buttons from '../../../components/Main/NewStickers/Buttons.jsx'

function NewStickers(){
  const [focusButton, setFocusButton] = useState(0)
  const [visionStickers, setvisionStickers] = useState(
    )
    const list = NewStickersPack[0][0]
    

  return(
    <div>
      <div>
        <div>
          <img src="./images/stickers/fire.png" alt="fire" />
          <h2>Новые стикеры</h2>
        </div>
        
          <Buttons/>
      </div>
    </div>
  )
}

export default NewStickers