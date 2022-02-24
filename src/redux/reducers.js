import { ADD_ITEMS } from "./action";
import { items } from "./state";

export let reducer = (state = items, action) => {
  let allItems;
  switch (action.type) {
    case ADD_ITEMS:
      allItems = [...state];
      allItems.push(action.payload);
      return allItems;
  }
};
