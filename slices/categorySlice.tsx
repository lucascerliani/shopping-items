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
    initializeState: (state: CategoryState[], action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { initializeState } = categorySlice.actions;

export const selectValue = (state: RootState) => state.categories;

export default categorySlice.reducer;
