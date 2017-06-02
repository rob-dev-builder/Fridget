let nextItemId = 8

export const ADD_ITEM = 'ADD_ITEM'
export const DEL_ITEM = 'DEL_ITEM'

export function addItem (item) {
  return {
    type: 'ADD_ITEM',
    newItem: {
      id: nextItemId++,
      item: item.item,
      owner: item.owner,
      expDate: item.expDate,
      shelf: item.shelf
    }
  }
}

export function deleteItem (item) {
  console.log('You clicked on' + item.item)
  return {
    type: 'DEL_ITEM',
    item: item
  }
}
