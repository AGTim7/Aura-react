import React from 'react'
import './Footer.css'

function Footer(){

  return(
    <footer>
      <div className='footer-top'>
        <div className='container footer-top-container'>
          <img className='footer-top-logo' src="./images/logo.svg" alt="logo" />
          <ul className='footer-top-list'>
            <li className='footer-top-list__el'>Соглашение</li>
            <li className='footer-top-list__el'>Лицензия</li>
            <li className='footer-top-list__el'>FAQ</li>
          </ul>
        </div>
      </div>
      <div className='footer-buttom'>
        <span className='footer-button__text'>AURA® | 2021</span>
      </div>
    </footer>
  )
}

export default Footer