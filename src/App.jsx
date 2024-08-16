import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import UserScreen from './Screens/UserScreen'


function App() {

  return (
    <Routes>
      <Route path="/" element={<UserScreen />} />
      <Route path='/HomeScreen/:userId' element={<HomeScreen/>} />
    </Routes>
  )
}

export default App
