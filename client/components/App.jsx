import React from 'react'

import AddItem from '../containers/AddItem'

    

import ShelfOne from '../containers/ShelfOne'
import ShelfTwo from '../containers/ShelfTwo'
import ShelfThree from '../containers/ShelfThree'


const App = () => (
  <div className='app-container'>
    <div className='fridge'>
      <ShelfOne />
      <ShelfTwo />
      <ShelfThree />
      <AddItem />
    </div>

  </div>
)

export default App
