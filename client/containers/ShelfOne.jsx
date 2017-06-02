import React, {Component} from 'react'
import {connect} from 'react-redux'

class ShelfOne extends Component {

  createShelfOne () {
    return this.props.fridge.map((food) => {
      if (food.shelf === 1) {
        return (
          <div className='foodItem' key={food.id}>
            <p className='itemTitle'>{food.item}</p>
            <p className='itemOwner'>{food.owner}</p>
            <p className='itemExp'>{food.expDate}</p>
          </div>
        )
      }
    })
  }
  render () {
    return (
      <div className='shelf1'>
        {this.createShelfOne()}
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    fridge: state.fridge
  }
}

export default connect(mapStateToProps)(ShelfOne)
