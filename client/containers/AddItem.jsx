import React from 'react'
import {connect} from 'react-redux'
import {addItem} from '../actions/'

class AddItem extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      item : '',
      owner: '',
      expdate: '',
      shelf: 0,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.dispatch(addItem(this.state))
  }

   handleChange (e) {
      this.setState({
        [e.target.name]: e.target.value
      })
   }


  //  const mapDispatchToProps (dispatch)  => ({
  //    return {
  //      addItem: () => {
  //        const action = addItem()
  //        dispatch(action)
  //      }
  //    }
  //  }
  render () {
    return (
      <div>
        <form onSubmit = {(e) => this.handleSubmit(e)}>
          <label >Item: </label><br />
          <input type='text' name='item' placeholder='Enter a word or phrase' onChange = {e => this.handleChange(e)} /><br />
          <label> Owner: </label><br />
            <input type='text' name='owner' placeholder='Owners name' onChange = {e => this.handleChange(e)} /><br />
          <label> Expiry Date: </label><br />
          <input type="date" name='expdate' placeholder='Enter the expiry date' onChange = {e => this.handleChange(e)} /><br />
          <label> Shelf number: </label><br />
          <input type='integer'  name='shelf' placeholder='Enter the shelf number' onChange = {e => this.handleChange(e)} /><br />
          <button>Submit</button>
        </form>
      </div>
      )
    }
}


export default connect()(AddItem)
