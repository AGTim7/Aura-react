import React from 'react';
import './Subscribe.css';

function Subscribe(){

  return(
    <div className='subscribe'>
      <div className='container subscribe-container'>
        <form className='subscribe-form' action="#">
          <legend className='subscribe-form__legend'>Будьте в курсе новинок! Подпишись на рассылку!</legend>
          <input className='subscribe-form-input__nickname' type="text" name="nickname" placeholder="Имя"/>
          <input className='subscribe-form-input__email' type="email" name="nickname" placeholder="E-mail"/>
          <button className='subscribe-form-submit' type="submit">Подписаться</button>
          <p className='subscribe-form__text'><input className='subscribe-form__checkbox' type="checkbox"/>Согласен на обработку персональных данных</p>
        </form>
        <img className='subscribe-image' src="/images/forms/okay-stick.png" alt="stickers" />
      </div>
    </div>
  )
}

export default Subscribe