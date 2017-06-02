import React from 'react'

import AddItem from '../containers/AddItem'
import ShelfOne from '../containers/ShelfOne'
import ShelfTwo from '../containers/ShelfTwo'
import ShelfThree from '../containers/ShelfThree'


const App = () => (
  <div className='app-container'>
    <header>Fridge-IT!
    </header>
    <AddItem />
    <div className='fridge'>

      <ShelfOne />
      <ShelfTwo />
      <ShelfThree />
    </div>
  </div>
)

export default App
