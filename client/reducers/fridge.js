import fridgeData from '../data/fridge-items'
const initialState = fridgeData


const fridge = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FOOD':
      return [
        ...state,
        {
          id: action.id,
          word: action.word
        }
      ]

    default:
      return state
  }
}

export default fridge
