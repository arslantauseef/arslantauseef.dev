import { Header } from './components/layout/header/tsx/Header'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
 

  return (
    <>
    <Header />
    <Outlet/>
    </>
  )
}

export default App
