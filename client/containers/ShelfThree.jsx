import React, {Component} from 'react'
import {connect} from 'react-redux'

class ShelfThree extends Component {

  createShelfThree () {
    return this.props.fridge.map((food) => {
      if (Number(food.shelf) === 3) {
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
      <div className='shelf3'>
        {this.createShelfThree()}
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    fridge: state.fridge
  }
}

export default connect(mapStateToProps)(ShelfThree)
