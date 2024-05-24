import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import BmiCheck from './Pages/BmiCheck'
import ShoppingList from './Pages/ShoppingList'
import QuotesGen from './Pages/QuotesGen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home /> */}
      {/* <BmiCheck /> */}
      {/* <ShoppingList /> */}
      <QuotesGen />
    </>
  )
}

export default App
