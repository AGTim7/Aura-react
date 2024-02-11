import React from 'react'
import './TopConditions.css'

function TopConditions(){

  return(
    <div className='top-conditions'>
      <div className='container top-conditions-container'>
        <div className='top-conditions-info'>
          <h5 className='top-conditions-info__h5'>Для попадания в топ необходимо:</h5>
          <ul className='top-conditions-info-list'>
            <li className='top-conditions-info-list-el'>
              <img className='top-conditions-info-list-el__image' src="./images/icons/picture.svg" alt="icon" />
              <span className='top-conditions-info-list-el__text'>Минимум пять опубликованных работ</span>
            </li>
            <li className='top-conditions-info-list-el'>  
              <img className='top-conditions-info-list-el__image' src="./images/icons/smile.svg" alt="icon" />
              <span className='top-conditions-info-list-el__text'>Инвайт трём коллегам по цеху</span>
            </li>
            <li className='top-conditions-info-list-el'>
              <img className='top-conditions-info-list-el__image' src="./images/icons/verif-account.svg" alt="icon" />
              <span className='top-conditions-info-list-el__text'>Верифицированный аккаунт</span>
            </li>
          </ul>
        </div>
        <img className='top-conditions-image' src="./images/footer/smile-stick.png" alt="stickers" />
      </div>
    </div>
  )
}

export default TopConditions