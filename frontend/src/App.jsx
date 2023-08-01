import Home from '../pages/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RefreshContext, FilterInputContext, SortInputContext, LoggedInContext } from '../context/Context'
import { useState } from 'react'
import BigStuff from '../pages/BigStuff'
import MidStuff from '../pages/MidStuff'
import SmallStuff from '../pages/SmallStuff'
import DetailBigStuff from '../pages/DetailBigStuff'
import DetailMidStuff from '../pages/DetailMidStuff'
import DetailSmallStuff from '../pages/DetailSmallStuff'
import UserProfile from '../pages/UserProfile'
import Login from '../pages/Login'
import Register from '../pages/Register'


function App() {
  const [refresh, setRefresh] = useState(true)
  const [filterInput, setFilterInput] = useState()
  const [sortInput, setSortInput] = useState()
  const [loggedIn, setLoggedIn] = useState(true)

  return (
    <>
    <LoggedInContext.Provider value={{loggedIn, setLoggedIn}}>
    <SortInputContext.Provider value={{sortInput, setSortInput}}>
    <FilterInputContext.Provider value={{filterInput, setFilterInput}}>
    <RefreshContext.Provider value={{refresh, setRefresh}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/userprofile' element={<UserProfile/>}/>
      <Route path='/bigstuff' element={<BigStuff/>}/>
      <Route path='/notsobigstuff' element={<MidStuff/>} />
      <Route path='/smallstuff' element={<SmallStuff/>} />
      <Route path='/bigstuff/:id' element={<DetailBigStuff/>}/>
      <Route path='/notsobigstuff/:id' element={<DetailMidStuff/>}/>
      <Route path='/smallstuff/:id' element={<DetailSmallStuff/>}/>
    </Routes>
    </BrowserRouter>
    </RefreshContext.Provider>
    </FilterInputContext.Provider>
    </SortInputContext.Provider>
    </LoggedInContext.Provider>
    </>
  )
}

export default App
