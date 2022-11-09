import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Item {
  item: string;
  image: string;
  favourite: boolean;
}

export interface CategoryState {
  category: string;
  color: string;
  items: Item[];
}

const initialState: CategoryState[] = [
  {
    category: '',
    color: '',
    items: [],
  },
];

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    initializeState: (_state: CategoryState[], action) => {
      return action.payload;
    },
    addCategory: (state: CategoryState[], action) => {
      return [...state, action.payload];
    },
    removeCategory: (state: CategoryState[], action) => {
      return removeCategoryUtil(state, action.payload);
    },
    removeItem: (state: CategoryState[], action) => {
      const { categoryName, itemName } = action.payload;

      removeItemUtil(state, categoryName, itemName);
    },
    addFavourite: (state: CategoryState[], action) => {
      const { categoryName, itemName } = action.payload;

      changeFavouriteField(state, categoryName, itemName, true);
    },
    removeFavourite: (state: CategoryState[], action) => {
      const { categoryName, itemName } = action.payload;

      changeFavouriteField(state, categoryName, itemName, false);
    },
  },
});

const changeFavouriteField = (
  state: CategoryState[],
  categoryName: string,
  itemName: string,
  value: boolean
) => {
  const categoryObj = state.find(
    (categoryObj) => categoryObj.category === categoryName
  )!;

  categoryObj.items.find((item) => item.item === itemName)!.favourite = value;

  return state;
};

const removeCategoryUtil = (state: CategoryState[], categoryName: string) => {
  const categoryObj = state.find(
    (categoryObj) => categoryObj.category === categoryName
  );

  const categoryIndex = state.indexOf(categoryObj!);

  state.splice(categoryIndex, 1);

  return state;
};

const removeItemUtil = (
  state: CategoryState[],
  categoryName: string,
  itemName: string
) => {
  const categoryObj = state.find(
    (categoryObj) => categoryObj.category === categoryName
  )!;

  const itemToRemoveIndex = categoryObj.items.indexOf(
    categoryObj.items.find((itemObj) => itemObj.item === itemName)!
  );

  categoryObj.items.splice(itemToRemoveIndex, 1);

  return state;
};

// Action creators are generated for each case reducer function
export const {
  initializeState,
  addCategory,
  removeCategory,
  removeItem,
  addFavourite,
  removeFavourite,
} = categorySlice.actions;

export const selectValue = (state: RootState) => state.categories;

export default categorySlice.reducer;
