import React from 'react'

var today = new Date()
console.log(today)

function ExpDate (props) {
  let classes = 'itemExp'
  const expiry = new Date(props.expDate)
  console.log(expiry)
  if (expiry < today) {
    classes = 'expired'
  }
  return (
    <p className={classes}>{props.expDate} </p>
  )
}

export default ExpDate
