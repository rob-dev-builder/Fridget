import React, {Component} from 'react'
import {connect} from 'react-redux'
import ExpDate from '../components/ExpDate'
import {bindActionCreators} from 'redux'
import {deleteItem} from '../actions/index'


class ShelfOne extends Component {

  createShelfOne () {

    return this.props.fridge.map((food) => {

      // if (food.expDate < utc) {
      //   document.getElementById('food').className= "test"
      // }
      if (Number(food.shelf) === 1) {
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

function matchDispatchToProps (dispatch) {
  return bindActionCreators({deleteItem: deleteItem}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ShelfOne)
