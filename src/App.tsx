import { Header } from './components/layout/header/tsx/Header'
import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer } from './components/layout/footer/tsx/Footer'

function App() {
 

  return (
    <>
    <Header />
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
