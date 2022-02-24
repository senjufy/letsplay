export const ADD_ITEMS = "ADD_ITEMS";

export function addItem(items) {
  return {
    type: ADD_ITEMS,
    payload: items,
  };
}
