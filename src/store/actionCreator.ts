import { IThemesResponse, IThemes } from "../types/categoryTypes";
import { addCategories } from "./rootReducer";
import { AppDispatch } from "./store";

export const fetchCaterogies = () => async (dispatch: AppDispatch) => {
  const response = await fetch("https://www.algoexpert.io/api/fe/questions");
  const data: IThemesResponse[] = await response.json();
  const dataActivePropetries = data.map((elem: IThemesResponse): IThemes => {
    return { ...elem, active: false };
  });

  dispatch(addCategories(dataActivePropetries));
};

export const getCategories = () => (dispatch: AppDispatch) => {
  const localCategories = localStorage.getItem("categories");

  if (localCategories) {
    dispatch(addCategories(JSON.parse(localCategories)));
  } else {
    dispatch(fetchCaterogies());
  }
};
