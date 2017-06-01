import React from 'react'
import {connect} from 'react-redux'

const InsideFridge=( props => {
  // console.log(props.fridge)
  return (
    <div>
      <ul>
        {props.fridge.map( food => {
          return (
            <div key = {food.id}>
            <li>{food.item}</li>
            <li>{food.expDate}</li>
            <li>{food.owner}</li>
            <li>{food.shelf}</li>
            <hr/>
            </div>
          )
        } )}
      </ul>
    </div>
  )
})



const mapStateToProps = (state) => {
  return {
    fridge: state.fridge
  }
}

export default connect(mapStateToProps)(InsideFridge)
