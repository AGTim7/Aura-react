import React from 'react'
import Header from './layout/Header'
import Auctions from './layout/Main/Auctions/Auctions.jsx'
import NewStickers from './layout/Main/NewStickers/NewStickers.jsx'
import './reset.css'
import './fonts/fonts.css'
import './App.css'

function App() {
  return (
        <div>
          <Header/>
          <Auctions/>
          <NewStickers/>
        </div>
  );
}

export default App;
