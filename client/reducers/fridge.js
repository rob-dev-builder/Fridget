const initialState = [

]


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

export default words
