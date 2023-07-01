
import React from 'react'
import NavBar from './components/Navbar/NavBar'
import './App.css';

import {action,originals, trending,toprated,comedy,horror, romance,documentaries} from './components/urls'
import Banner from './components/Banner/Banner';
import Rowpost from './components/RowPost/Rowpost';

function App() {
  
  return (
    <div className='App'>
    <NavBar/>
    <Banner/>
    <Rowpost url={originals} title="Netflix Orginals"/>
    <Rowpost url={action} title="Action" isSmall/>
    <Rowpost url={trending} title="Trending" isSmall/>
    <Rowpost url={toprated} title="Top Rated" isSmall/>
    <Rowpost url={comedy} title="Comedy Movies" isSmall/>
    <Rowpost url={horror} title="Horror Movies" isSmall/>
    <Rowpost url={romance} title="Romance Movies" isSmall/>
    <Rowpost url={documentaries} title="Documentaries" isSmall/>
    </div>
  )
}

export default App
