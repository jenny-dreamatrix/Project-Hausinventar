import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home.jsx';
import BigStuff from './pages/BigStuff.jsx'
import NotSoBigStuff from './pages/NotSoBigStuff.jsx'
import SmallStuff from './pages/SmallStuff.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/bigstuff' element={<BigStuff/>}></Route>
        <Route path='/notsobigstuff' element={<NotSoBigStuff/>}></Route>
        <Route path='/smallstuff' element={<SmallStuff/>}></Route>
      </Routes>
    </BrowserRouter>     
    </>
  )
}

export default App
