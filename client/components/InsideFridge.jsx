import React from 'react'
import {connect} from 'react-redux'

const InsideFridge=( props => {
  return (
    <div>
      <ul>

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
