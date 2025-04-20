import React, { useState } from 'react'
import Search from './components/search';

export const App = () => {
  const [searchTerm,setSearchTerm] = useState('');
  return (
    <main>
      <div className="pattern"/>

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient"> Movies </span> you'll enjoy without the hassle</h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <h1>{searchTerm}</h1>
      </div>


    </main>
  )
}

export default App

