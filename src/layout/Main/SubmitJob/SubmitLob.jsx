import React from 'react';
import './SubmitJob.css'

function SubmitJob(){


  return(
    <div className='container'>
      <div className='container share-works'>
        <div className='share-works-info'>
          <h2 className='share-works-info__h1'>Стать автором</h2>
          <h4 className='share-works-info__h4'>Если ты художник или стремишься им стать — добро пожаловать к нам!</h4>
          <p className='share-works-info__text'>
            Отправь нам от трёх до пяти своих работ и напиши свой ник в телеграме. 
            Если наши кураторы решат, что нам по пути, то мы обязательно свяжемся с 
            тобой и обговорим условия сотрудничества! <b style={{fontWeight:700}}>Удачи!</b>
          </p>
          <img className='share-works-info__image' src="./images/forms/hands-stick.png" alt="stickers" />
        </div>
        <form className="share-works-form" action="#">
          <input className="share-works-form-files__input" type="file" name="work-files"/>
          <div className="share-works-form-files-view">
            <svg className="share-works-form-files-view__image" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="50" fill="white"/>
              <path d="M53.4081 46.5919H70V53.4081H53.4081V70H46.5919V53.4081H30V46.5919H46.5919V30H53.4081V46.5919Z"/>
            </svg>
            <span className="share-works-form-files-view__text">Прикрепить работы (.jpeg / .png)</span>
          </div>
          <input className="share-works-form__telegram" type="text" name="telegram-acс" placeholder="@telegram_nickname"/>
          <button className="share-works-form__button" type="submit">Отправить</button>
        </form>
      </div>
    </div>
  )
}

export default SubmitJob;