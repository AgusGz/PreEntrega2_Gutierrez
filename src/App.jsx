import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer'
import CounterComponent from './components/CounterComponent'

const App = () => {
  return (
    <BrowserRouter>

    <NavBar />

    <Routes>
    <Route exact path='/' element={<ItemListContainer />}/>
    <Route exact path='/category/:id' element={<ItemListContainer />}/>
    <Route exact path='/item/:id' element={<ItemDetailContainer />}/>
    </Routes>

    
      </BrowserRouter>
  )
}

export default App