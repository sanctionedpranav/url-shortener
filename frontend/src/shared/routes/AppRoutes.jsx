import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from '../../modules/user/pages/Login'
import Register from '../../modules/user/pages/Register'
import UrlShort from '../../modules/urlshortner/pages/UrlShort'

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/url-shortener" element={<UrlShort />} />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default AppRoutes
