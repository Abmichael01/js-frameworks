import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import QuickLinks from './components/QuickLinks'
import Framework from './components/Framework'
import ScrollUpButt from './components/ScrollUpButt'
import RadialGradient from './components/RadialGradient'
import Footer from './components/Footer'

import './App.css' 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full overflow-hidden'>
          <RadialGradient />
          <Header />
          <Hero />
          <QuickLinks />
          <Framework />
          <ScrollUpButt />
          <Footer />
      </div>
      
    </>
  )
}

export default App
