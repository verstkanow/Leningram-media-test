import React from "react";
import { useTypeSelector } from "../../hooks/hooks";
import { selectorAllActiveCategory } from "../../store/selects";
import styles from "./ProgressBar.module.scss";

export const ProgresBar = () => {
  const allTheme = useTypeSelector((state) => state.categories);
  const activeTheme = useTypeSelector(selectorAllActiveCategory);
  const percent = Math.round((activeTheme.length * 100) / allTheme.length);

  return (
    <section className={styles.progress}>
      <h1 className={styles.progressTitle}>{`${activeTheme.length} Questions Completed out of ${allTheme.length}`}</h1>
      <div className={styles.progressBar}>
        <progress value={`${percent}`} max="100"></progress>
        <span className={styles.progressBarValue}>{`${percent}%`}</span>
      </div>

      <div className={styles.progressButtons}>
        <button className={styles.progressButton} type="button">
          FrontendExpert Certificate
        </button>
        <button className={styles.progressButton} type="button">
          Recruiting Profile
        </button>
      </div>
    </section>
  );
};
