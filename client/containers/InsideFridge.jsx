import React, {Component} from 'react'
import {connect} from 'react-redux'

class InsideFridge extends Component {

  createFridgeList () {

    let shelfOneArr = []
    let shelfTwoArr = []
    let shelfThreeArr = []

    let totalFridgeContents = ""

    this.props.fridge.map((food) => {
      if (food.shelf === 1){
        shelfOneArr.push(food)
       }
       if (food.shelf === 2){
       shelfTwoArr.push(food)
       }
       if (food.shelf === 3){
       shelfThreeArr.push(food)
      }
    })

    // for each food item in shelf one
      // create a div

    // #########################################################################################################################
    // return this.props.fridge.map((food) => {
    //   if (food.shelf === 1){
    //   return (
    //     <div className='shelf1'><li key={food.id}>{food.item} {food.owner} {food.expDate} {food.shelf}</li></div>)
    //   }
    //   if (food.shelf === 2){
    //   return (<div className='shelf2'><li key={food.id}>{food.item} {food.owner} {food.expDate} {food.shelf}</li></div>)
    //   }
    //   if (food.shelf === 3){
    //   return (<div className='shelf3'><li key={food.id}>{food.item} {food.owner} {food.expDate} {food.shelf}</li></div>)
    // #########################################################################################################################

    // return (
    //   // <li key={food.id}>{food.item} {food.owner} {food.expDate} {food.shelf}</li>
    //     // <div key={food.id}>
    //     //   <li>{food.item}</li>
    //     //   <li>{food.expDate}</li>
    //     //   <li>{food.owner}</li>
    //     //   <li>{food.shelf}</li>
    //     //   <hr/>
    //     // </div>
    // )
    console.log("Shelf one: "+shelfOneArr)
    console.log("Shelf two: "+shelfTwoArr)
    console.log("Shelf three: "+shelfThreeArr)
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
