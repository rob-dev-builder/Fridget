import React, {Component} from 'react'
import {connect} from 'react-redux'

import ExpDate from '../components/ExpDate'

import {bindActionCreators} from 'redux'
import {deleteItem} from '../actions/index'


class ShelfThree extends Component {

  createShelfThree () {
    return this.props.fridge.map((food) => {
      if (Number(food.shelf) === 3) {
        return (
          <div className='foodItem' key={food.id} onClick={() => this.props.deleteItem(food)}>
            <p className='itemTitle'>{food.item}</p>
            <p className='itemOwner'>{food.owner}</p>
            <ExpDate expDate={food.expDate} />

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

function matchDispatchToProps (dispatch) {
  return bindActionCreators({deleteItem: deleteItem}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ShelfThree)
