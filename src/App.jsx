import React from 'react'
import AppRouter from './Config/AuthGuard/AppRouter'
import Header from './Components/Header'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  )
}

export default App
