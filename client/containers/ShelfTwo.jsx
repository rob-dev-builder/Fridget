import React, {Component} from 'react'
import {connect} from 'react-redux'
import ExpDate from '../components/ExpDate'

import {bindActionCreators} from 'redux'
import {deleteItem} from '../actions/index'


class ShelfTwo extends Component {

  createShelfTwo () {
    return this.props.fridge.map((food) => {
      if (Number(food.shelf) === 2) {
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
      <div className='shelf2'>
        {this.createShelfTwo()}
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

export default connect(mapStateToProps, matchDispatchToProps)(ShelfTwo)
