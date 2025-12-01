import { useState } from 'react'
import './App.css'
import Register from './modules/user/pages/Register'
import { Button, Flex } from '@radix-ui/themes'
import AppRoutes from './shared/routes/AppRoutes'
import { useNavigate } from 'react-router-dom'
import UrlShort from './modules/urlshortner/pages/UrlShort'

function App() {
  const navigate = useNavigate();

  return (
    <>
      {/* <UrlShort /> */}
      <AppRoutes />
    </>
  )
}

export default App
