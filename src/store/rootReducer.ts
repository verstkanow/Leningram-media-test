import { createSlice } from "@reduxjs/toolkit";
import { IThemesState } from "../types/categoryTypes";

const initialState: IThemesState = {
  loading: true,
  categories: [],
  error: "",
};

const caterogiesSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    addCategories(state, action) {
      state.categories = action.payload;
    },
    toogleActive(state, action) {
      state.categories = state.categories.map((elem) => (elem.id === action.payload ? { ...elem, active: !elem.active } : elem));
    },
  },
});

export const { addCategories, toogleActive } = caterogiesSlice.actions;

export default caterogiesSlice.reducer;
