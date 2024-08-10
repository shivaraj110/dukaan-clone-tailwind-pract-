import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  return (
    <>
    <div className='grid grid-cols-4 st:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-5 '>
    <RevenueCard title={"Ammount Pending"} amt={"92,312.10"} orderCount={69}/>
    </div>
    </> 
  )
}

export default App
  