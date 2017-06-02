let nextItemId = 8

export const ADD_ITEM = 'ADD_ITEM'

export function addItem (item) {
  return {
    type: 'ADD_ITEM',
    newItem:{
      id: nextItemId++,
      item: item.item,
      owner: item.owner,
      expDate: item.expDate,
      shelf: item.shelf
    }
  }
}
