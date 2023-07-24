import Home from '../pages/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RefreshContext } from '../context/Context'
import { useState } from 'react'
import BigStuff from '../pages/BigStuff'
import MidStuff from '../pages/MidStuff'
import SmallStuff from '../pages/SmallStuff'
import DetailBigStuff from '../pages/DetailBigStuff'
import DetailMidStuff from '../pages/DetailMidStuff'
import DetailSmallStuff from '../pages/DetailSmallStuff'


function App() {
  const [refresh, setRefresh] = useState(true)

  return (
    <>
    <RefreshContext.Provider value={{refresh, setRefresh}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/bigstuff' element={<BigStuff/>}/>
      <Route path='/notsobigstuff' element={<MidStuff/>} />
      <Route path='/smallstuff' element={<SmallStuff/>} />
      <Route path='/bigstuff/:id' element={<DetailBigStuff/>}/>
      <Route path='/notsobigstuff/:id' element={<DetailMidStuff/>}/>
      <Route path='/smallstuff/:id' element={<DetailSmallStuff/>}/>
    </Routes>
    </BrowserRouter>
    </RefreshContext.Provider>
    </>
  )
}

export default App
