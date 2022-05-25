import React, { useEffect } from "react";
import { useTypeDispatch, useTypeSelector } from "../../hooks/hooks";
import { getCategories } from "../../store/actionCreator";
import { toogleActive } from "../../store/rootReducer";
import { CssCategory } from "../CssCategory/CssCategory";
import { DomCategory } from "../DomCatergory/DomCategory";
import { HtmlCategory } from "../HtmlCategory/HtmlCategory";
import { JsCategory } from "../JsCaterogy/JsCategory";
import { ProgresBar } from "../ProgressBar/ProgresBar";
import styles from "./App.module.scss";

function App() {
  const dispatch = useTypeDispatch();
  const categories = useTypeSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categories.length) window.onunload = () => localStorage.setItem("categories", JSON.stringify(categories));
  });

  const onClickTheme = (id: string) => {
    dispatch(toogleActive(id));
  };

  return (
    <>
      <ProgresBar />

      <section className={styles.categories}>
        <HtmlCategory onClickTheme={onClickTheme} />
        <CssCategory onClickTheme={onClickTheme} />
        <JsCategory onClickTheme={onClickTheme} />
        <DomCategory onClickTheme={onClickTheme} />
      </section>
    </>
  );
}

export default App;
