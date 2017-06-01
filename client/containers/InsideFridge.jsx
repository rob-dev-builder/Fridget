import React, {Component} from 'react'
import {connect} from 'react-redux'

class InsideFridge extends Component {

  createFridgeList () {
    return this.props.fridge.map((food) => {
      return (
        <li key={food.id}>{food.item} {food.owner} {food.expDate} {food.shelf}</li>
          // <div key={food.id}>
          //   <li>{food.item}</li>
          //   <li>{food.expDate}</li>
          //   <li>{food.owner}</li>
          //   <li>{food.shelf}</li>
          //   <hr/>
          // </div>
      )
    })
  }
  render () {
    return (
      <ul>
        {this.createFridgeList()}
      </ul>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    fridge: state.fridge
  }
}

export default connect(mapStateToProps)(InsideFridge)
