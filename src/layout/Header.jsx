import React from 'react'
import HeaderTop from '../components/Header/HeaderTop'
import HeaderBottom from '../components/Header/HeaderBottom'

function Header(){
  return(
    <header>
      <div className='container'>
        <HeaderTop/>
      </div>
        <HeaderBottom/>
    </header>
  )
}

export default Header