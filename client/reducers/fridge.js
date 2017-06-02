import fridgeData from '../data/fridge-items'
const initialState = fridgeData()
console.log(initialState)

const fridge = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.newItem
      ]

    default:
      return state
  }
}

export default fridge
