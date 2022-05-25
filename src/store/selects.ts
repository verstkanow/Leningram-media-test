import { createSelector } from "@reduxjs/toolkit";
import { Category, IThemesState } from "../types/categoryTypes";

const selectorCategory = (state: IThemesState) => state.categories;

export const selectorHtmlCategory = createSelector(selectorCategory, (items) => items.filter((elem) => elem.category === Category.HTML));
export const selectorCssCategory = createSelector(selectorCategory, (items) => items.filter((elem) => elem.category === Category.CSS));
export const selectorJsCategory = createSelector(selectorCategory, (items) => items.filter((elem) => elem.category === Category.JavaScript));
export const selectorDomCategory = createSelector(selectorCategory, (items) => items.filter((elem) => elem.category === Category.DOM_Manipulation));
export const selectorAllActiveCategory = createSelector(selectorCategory, (items) => items.filter((elem) => elem.active));
