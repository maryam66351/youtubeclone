import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Videoplayer from './components/Videoplayer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const [shrink, setShrink] = useState(false);
  const [category, setCategory] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar setshrink={setShrink} />
        <Routes>
          <Route path='/' element={<Home shrink={shrink} category={category} setCategory={setCategory} />} />
          <Route path='/video/:categoryId/:id' element={<Videoplayer />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
