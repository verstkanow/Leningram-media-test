import React from "react";
import { useTypeSelector } from "../../hooks/hooks";
import { selectorHtmlCategory } from "../../store/selects";
import stylesCommon from "../../commonStyles/theme.module.scss";
import classNames from "classnames";

interface HtmlCategoryProps {
  onClickTheme: Function;
}

export const HtmlCategory = ({ onClickTheme }: HtmlCategoryProps) => {
  const HtmlCategory = useTypeSelector(selectorHtmlCategory);
  let countActiveTheme = 0;

  const HtmlCategoryList = HtmlCategory.map((elem) => {
    countActiveTheme = elem.active ? (countActiveTheme += 1) : countActiveTheme;

    return (
      <li className={stylesCommon.themeItem} key={elem.id} onClick={() => onClickTheme(elem.id)}>
        <span className={classNames(stylesCommon.themeCircle, { [stylesCommon["themeCircle--active"]]: elem.active })}></span>
        {elem.name}
      </li>
    );
  });
  return (
    <div>
      <h2>{`HTML - ${countActiveTheme}/${HtmlCategoryList.length}`}</h2>
      <ul className={stylesCommon.themeList}>{HtmlCategoryList}</ul>
    </div>
  );
};
