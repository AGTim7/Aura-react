import React from 'react'
import './Header-css/headerBottom.css'

function HeaderBottom(){
  return(
  <div className="header-bottom">
    <div className="container">
      <div className="header-bottom__flex-left">
        <h1 className="header-bottom__h1">Площадка<br/>для реализации<br/>криптостикеров</h1>
        <div className="header-bottom__flex-left__buttons">
          <a className="header-bottom__buy-button" href="#">Купить</a>
          <a className="header-bottom__bec-autor" href="#">Стать автором</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeaderBottom