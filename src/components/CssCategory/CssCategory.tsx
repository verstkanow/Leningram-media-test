import React from "react";
import { useTypeSelector } from "../../hooks/hooks";
import { selectorCssCategory } from "../../store/selects";
import stylesCommon from "../../commonStyles/theme.module.scss";
import classNames from "classnames";

interface CssCategoryProps {
  onClickTheme: Function;
}

export const CssCategory = ({ onClickTheme }: CssCategoryProps) => {
  const CssCategory = useTypeSelector(selectorCssCategory);
  let countActiveTheme = 0;

  const CssCategoryList = CssCategory.map((elem) => {
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
      <h2>{`Css - ${countActiveTheme}/${CssCategoryList.length}`}</h2>
      <ul className={stylesCommon.themeList}>{CssCategoryList}</ul>
    </div>
  );
};
