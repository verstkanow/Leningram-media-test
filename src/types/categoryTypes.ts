export const enum Category {
  HTML = "HTML",
  CSS = "CSS",
  DOM_Manipulation = "DOM Manipulation",
  JavaScript = "JavaScript",
}

export interface IThemesResponse {
  id: string;
  name: string;
  category: Category.CSS | Category.HTML | Category.JavaScript | Category.DOM_Manipulation;
}

export interface IThemes extends IThemesResponse {
  active: boolean;
}

export interface IThemesState {
  loading: boolean;
  categories: IThemes[];
  error: string;
}
