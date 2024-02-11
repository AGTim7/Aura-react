import React from 'react'
import Header from './layout/Header'
import Auctions from './layout/Main/Auctions/Auctions.jsx'
import NewStickers from './layout/Main/NewStickers/NewStickers.jsx'
import Subscribe from './layout/Main/Subscribe/Subscribe.jsx'
import SubmitJob from './layout/Main/SubmitJob/SubmitLob.jsx'
import TopSales from './layout/Main/TopSales/TopSales.jsx'
import TopConditions from './layout/Main/TopSales/TopConditions.jsx'
import Footer from './layout/Footer/Footer.jsx'
import './reset.css'
import './fonts/fonts.css'
import './App.css'

function App() {
  return (
        <div>
          <Header/>
          <Auctions/>
          <NewStickers/>
          <Subscribe/>
          <SubmitJob/>
          <TopSales/>
          <TopConditions/>
          <Footer/>
        </div>
  );
}

export default App;
