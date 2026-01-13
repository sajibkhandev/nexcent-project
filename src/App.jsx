import React from 'react'
import Navber from './layouts/Navber'
import Bannar from './layouts/Bannar'
import Client from './layouts/Client'
import Spending from './layouts/Spending'
import Heading from './components/Heading'
import SubHeading from './components/SubHeading'

const App = () => {
  return (
    <div>
      <Navber/>
      <Bannar/>
      <Client/>
      <Spending/>
     
      
    </div>
  )
}

export default App