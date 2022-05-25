import React from "react";
import { useTypeSelector } from "../../hooks/hooks";
import { selectorJsCategory } from "../../store/selects";
import stylesCommon from "../../commonStyles/theme.module.scss";
import classNames from "classnames";

interface JsCategoryProps {
  onClickTheme: Function;
}

export const JsCategory = ({ onClickTheme }: JsCategoryProps) => {
  const JsCategory = useTypeSelector(selectorJsCategory);
  let countActiveTheme = 0;

  const JsCategoryList = JsCategory.map((elem) => {
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
      <h2>{`JavaScript - ${countActiveTheme}/${JsCategoryList.length}`}</h2>
      <ul className={stylesCommon.themeList}>{JsCategoryList}</ul>
    </div>
  );
};
