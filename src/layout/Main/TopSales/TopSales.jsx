import React from 'react';
import StickSale from '../../../components/Main/TopSales/StickSale.jsx';
import './TopSales.css'

function TopSales(){

  const sticks = [];
  for(let i = 0; i < 6; i++){
    sticks.push(<li>
      <StickSale index={i}/>
    </li>)
  }


  return(
    <div className='top-sales'>
      <div className='container'>
        <h2 className='top-sales__h2'>Топ продаж</h2>
        <ul className='top-sales-container'>{sticks}</ul>
      </div>
    </div>
  )
}

export default TopSales