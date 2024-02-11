import React, {useState} from 'react'
import Slider from '../../../components/Main/NewStickers/Slider.jsx'
import './NewStickers.css'

function NewStickers(){
  
  return(
    <div className='new-stickers'>
      <div className='container'>
          <div className='new-stickers-top'>
            <img src="./images/stickers/fire.png" alt="fire" />
            <h2 className='new-stickers-top__h2'>Новые стикеры</h2>
          </div>
          <Slider/>
      </div>
    </div>
  )
}

export default NewStickers