import React from "react";
import { useTypeSelector } from "../../hooks/hooks";
import { selectorDomCategory } from "../../store/selects";
import stylesCommon from "../../commonStyles/theme.module.scss";
import classNames from "classnames";

interface DomCategoryProps {
  onClickTheme: Function;
}

export const DomCategory = ({ onClickTheme }: DomCategoryProps) => {
  const DomCategory = useTypeSelector(selectorDomCategory);
  let countActiveTheme = 0;

  const DomCategoryList = DomCategory.map((elem) => {
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
      <h2>{`DOM Manipulation - ${countActiveTheme}/${DomCategoryList.length}`}</h2>
      <ul className={stylesCommon.themeList}>{DomCategoryList}</ul>
    </div>
  );
};
