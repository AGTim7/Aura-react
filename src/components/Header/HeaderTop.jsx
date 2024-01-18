import React from 'react'
import logo from './Header-images/logo.svg'
import './Header-css/headerTop.css'

function HeaderTop(){
  return(
      <div className='header-top'>
        <img className="logo" src={logo} alt="logo" />
        <li className="header-nav">
          <ol>
            <a className="header-nav-el" href="#">Авторы</a>
          </ol>
          <ol>
            <a className="header-nav-el" href="#">Коллекции</a>
          </ol>
          <ol>
            <a className="header-nav-el" href="#">Сервисы</a>
          </ol>
        </li>
        <a href="#" class="header-button">Кошелёк</a>
      </div>
  )
}

export default HeaderTop